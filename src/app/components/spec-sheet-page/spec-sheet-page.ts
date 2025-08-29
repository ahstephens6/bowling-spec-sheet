import { Component, inject } from '@angular/core';
import { SpecSheetInterface } from '../../interfaces/interfaces';
import { SpecSheet } from '../spec-sheet/spec-sheet';
import { BowlerService } from '../../services/bowler-service';

@Component({
  selector: 'app-spec-sheet-page',
  imports: [SpecSheet],
  templateUrl: './spec-sheet-page.html',
  styleUrl: './spec-sheet-page.scss'
})
export class SpecSheetPage {
  bowlerService: BowlerService = inject(BowlerService);
  specSheets: SpecSheetInterface[] | undefined = this.getSpecSheets();

  constructor() {
    // console.log(this.specSheets);
  }  

  getSpecSheets(): SpecSheetInterface[] | undefined {
    if (this.bowlerService.bowlers) {
      return [
        {
          name: 'Jackson Specs 2025',
          player: this.bowlerService.bowlers[0],
          data: {
            middleFinger: {
              vertical: 1,
              lateral: 0,
            },
            ringFinger: {
              vertical: 1,
              lateral: 0,
            },
          },
        },
        {
          name: 'Taylor Specs 2025',
          player: this.bowlerService.bowlers[1],
          data: {
            span: {
              thumbToRing: 2,
              thumbToMiddle: 2,
            },
            middleFinger: {
              vertical: 1,
              lateral: 0,
            },
            ringFinger: {
              vertical: 1,
              lateral: 0,
            },
            thumb: {
                pitch: {
                  vertical: 0,
                  lateral: 0,
                },
                oval: 40,
            },
          },
        },
      ];
    } else return undefined;
  }
}
