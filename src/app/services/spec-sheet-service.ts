import { Injectable, inject } from '@angular/core';
import { SpecSheetInterface } from '../interfaces/interfaces';
import { BowlerService } from './bowler-service';

@Injectable({
  providedIn: 'root'
})
export class SpecSheetService {
  bowlerService: BowlerService = inject(BowlerService);
  
  specSheets: SpecSheetInterface[] | undefined = this.getSpecSheets();

  getSpecSheets(): SpecSheetInterface[] | undefined {
    if (this.bowlerService) {
      return [
        {
          id: '1',
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
          id: '2',
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
        {
          id: '3',
          name: 'Xander Specs 2025',
          player: this.bowlerService.bowlers[2],
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
        {
          id: '4',
          name: 'Molly Specs 2025',
          player: this.bowlerService.bowlers[3],
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
    }
    return undefined;
  }
}
