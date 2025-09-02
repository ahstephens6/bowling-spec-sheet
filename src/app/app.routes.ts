import { Routes } from '@angular/router';
import { BowlerPage } from './components/bowler-page/bowler-page';
import { AddBowler } from './components/add-bowler/add-bowler';
import { RemoveBowler } from './components/remove-bowler/remove-bowler';
import { SpecSheetPage } from './components/spec-sheet-page/spec-sheet-page';
import { SpecSheet } from './components/spec-sheet/spec-sheet';
import { BowlerSpecs } from './components/bowler-specs/bowler-specs';

export const routes: Routes = [
    {path: '', component: BowlerPage, title: 'Bowlers'},
    {path: 'spec-sheets', component: SpecSheetPage, title: 'Spec-Sheets'},
    {path: 'addBowler/:id', component: AddBowler, title: 'Add Bowler'},
    {path: 'removeBowler/:id', component: RemoveBowler, title: 'Remove Bowler'},
    {path: 'bowler/:id', component: BowlerSpecs, title: 'Bowler Sheets'},
    {path: 'bowler/:id/sheet/:id', component: SpecSheet, title: 'Bowler Sheet'}
];
