import { Component } from '@angular/core';
import { SpecSheetInterface } from '../../interfaces/interfaces';
import { SpecSheet } from '../spec-sheet/spec-sheet';

@Component({
  selector: 'app-spec-sheet-page',
  imports: [],
  templateUrl: './spec-sheet-page.html',
  styleUrl: './spec-sheet-page.scss'
})
export class SpecSheetPage {
  specSheets: SpecSheetInterface[] = [

  ];
}
