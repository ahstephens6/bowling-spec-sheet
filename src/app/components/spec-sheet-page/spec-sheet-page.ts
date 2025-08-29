import { Component, inject } from '@angular/core';
import { SpecSheetInterface } from '../../interfaces/interfaces';
import { SpecSheet } from '../spec-sheet/spec-sheet';
import { BowlerService } from '../../services/bowler-service';
import { SpecSheetService } from '../../services/spec-sheet-service';

@Component({
  selector: 'app-spec-sheet-page',
  imports: [SpecSheet],
  templateUrl: './spec-sheet-page.html',
  styleUrl: './spec-sheet-page.scss'
})
export class SpecSheetPage {
  bowlerService: BowlerService = inject(BowlerService);
  specSheetService: SpecSheetService = inject(SpecSheetService);
  specSheets: SpecSheetInterface[] | undefined = this.getSpecSheets();

  constructor() {
    // console.log(this.specSheets);
  }  

  getSpecSheets(): SpecSheetInterface[] | undefined {
    if (this.bowlerService.bowlers) return this.specSheetService.specSheets;
    else return undefined;
  }
}
