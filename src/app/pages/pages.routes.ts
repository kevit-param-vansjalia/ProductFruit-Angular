import { Routes } from '@angular/router';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';

export default [
    { path: 'crud', component: Crud, data: { title: 'CRUD' } },
    { path: 'empty', component: Empty, data: { title: 'Empty' } },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
