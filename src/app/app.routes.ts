import { Routes } from '@angular/router';
import { SpecSheet } from './components/spec-sheet/spec-sheet';
import { BowlerPage } from './components/bowler-page/bowler-page';

export const routes: Routes = [
    {path: '', component: BowlerPage, title: 'Bowlers'},
    {path: 'spec-sheet/:id', component: SpecSheet, title: 'Spec-Sheet'},
];
