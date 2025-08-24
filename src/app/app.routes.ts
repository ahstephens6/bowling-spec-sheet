import { Routes } from '@angular/router';
import { SpecSheet } from './components/spec-sheet/spec-sheet';
import { App } from './app';

export const routes: Routes = [
    {path: '', component: App, title: 'Home'},
    {path: 'spec-sheet/:id', component: SpecSheet, title: 'Spec-Sheet'},
];
