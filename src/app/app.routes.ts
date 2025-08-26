import { Routes } from '@angular/router';
import { SpecSheet } from './components/spec-sheet/spec-sheet';
import { BowlerPage } from './components/bowler-page/bowler-page';
import { AddBowler } from './components/add-bowler/add-bowler';
import { RemoveBowler } from './components/remove-bowler/remove-bowler';

export const routes: Routes = [
    {path: '', component: BowlerPage, title: 'Bowlers'},
    {path: 'spec-sheet/:id', component: SpecSheet, title: 'Spec-Sheet'},
    {path: 'addBowler/:id', component: AddBowler, title: 'Add Bowler'},
    {path: 'removeBowler/:id', component: RemoveBowler, title: 'Remove Bowler'},
];
