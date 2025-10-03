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
    templateUrl: './app.menu.html'
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