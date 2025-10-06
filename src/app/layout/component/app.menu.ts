import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<div class="layout-sidebar">
    <!-- TOP SECTION -->
    <div class="layout-menu-top">
        <!-- Logo -->
        <div class="menu-logo">
            <a [routerLink]="['/']">
                <img src="logo.jpeg" alt="Sakai Logo" />
            </a>
        </div>

        <!-- Main Menu Items -->
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model; let i = index">
                <li
                    app-menuitem
                    *ngIf="!item.separator"
                    [item]="item"
                    [index]="i"
                    [root]="true"
                ></li>
                <li *ngIf="item.separator" class="menu-separator"></li>
            </ng-container>
        </ul>
    </div>

    <!-- BOTTOM SECTION -->
    <div class="layout-menu-bottom">
        <!-- Theme Toggle -->
        <div class="theme-toggle" (click)="toggleTheme()">
            <i
                class="layout-menuitem-icon pi"
                [ngClass]="layoutService.isDarkTheme() ? 'pi-sun' : 'pi-moon'"
            ></i>
            <span class="layout-menuitem-text">
                {{ layoutService.isDarkTheme() ? 'Light Mode' : 'Dark Mode' }}
            </span>
        </div>

        <!-- User Avatar -->
        <div class="user-avatar" (click)="onUserClick()">
            <div class="user-avatar-image">
                <!-- Replace with user's profile image or initials -->
                <img src="avatar.jpeg" alt="User Profile" />
            </div>
            <span class="layout-menuitem-text">User Profile</span> 
        </div>
    </div>
</div>
`

})
export class AppMenu {
    layoutService = inject(LayoutService);

    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/']
                    }
                ]
            },
            {
                label: 'Pages',
                items: [
                    {
                        label: 'Models',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Announcements',
                        icon: 'pi pi-megaphone',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'Banners',
                        icon: 'pi pi-bookmark',
                        routerLink: ['/pages/empty']
                    },
                    {
                        label: 'Customers',
                        icon: 'pi pi-users',
                        routerLink: ['/pages/empty']
                    },
                ]
            }
        ];
    }

    // Theme toggle method
    toggleTheme() {
        this.layoutService.layoutConfig.update((state) => ({ 
            ...state, 
            darkTheme: !state.darkTheme 
        }));
    }

    // User avatar click method
    onUserClick() {
        // Add your user profile logic here
        console.log('User profile clicked');
        // Example: open user profile menu or navigate to profile page
    }
}