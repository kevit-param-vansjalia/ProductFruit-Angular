import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { LayoutService } from '../service/layout.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-logo-container">
                <span class="page-title">{{ layoutService.pageTitle() }}</span>
                <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                    <i class="pi pi-bars"></i>
                </button>
            </div>
        </div>`
})
export class AppTopbar {
    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        // Automatically update page title on navigation
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this.getDeepestTitle(this.activatedRoute))
            )
            .subscribe(title => this.layoutService.setPageTitle(title));
    }

    private getDeepestTitle(route: ActivatedRoute): string {
        let child = route.firstChild;
        while (child?.firstChild) {
            child = child.firstChild;
        }
        return child?.snapshot.data['title'] || 'Dashboard';
    }
}
