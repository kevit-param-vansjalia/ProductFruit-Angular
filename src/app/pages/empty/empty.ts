import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-empty',
    standalone: true,
    imports: [ButtonModule, RouterModule],
    template: `
        <div class="flex flex-col items-center justify-center" style="min-height: calc(100vh - 9rem)">
            <div class="flex flex-col items-center justify-center">
                <div class="w-full md:w-auto" style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 p-8 sm:p-20 flex flex-col items-center text-center" style="border-radius: 53px">
                        <h1 class="text-primary font-bold text-4xl lg:text-5xl mb-2">Coming Soon</h1>
                        <span class="text-muted-color mb-8">Something new is on the way!</span>
                        <p class="text-muted-color mt-0 mb-8 max-w-2xl">We are working hard to bring you this new feature. Stay tuned for updates!</p>
                        <p-button label="Go to Dashboard" routerLink="/" />
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Empty {}
