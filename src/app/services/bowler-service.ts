import { Injectable } from '@angular/core';
import { BowlerInterface, BowlingBallInterface, SpecSheetInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BowlerService {
  bowlers: BowlerInterface[] = []
  specSheets: SpecSheetInterface[] = [];

  constructor() {
    this.setBowlers();
    this.setSpecSheets();
  }

  setBowlers() {
    this.bowlers = [
      {
        id: '1',
        gender: 'male',
        firstName: 'Jackson',
        lastName: 'McRae',
        usesThumb: false,
        rightHanded: true,
        arsenal: [],
        sheets: [
          {
            id: '1',
            name: 'Jackson Specs 2025',
            player: this.bowlers[0],
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
        ]
      },
      {
        id: '2',
        gender: 'female',
        firstName: 'Taylor',
        lastName: 'Davis',
        usesThumb: true,
        rightHanded: true,
        arsenal: [],
        sheets: [
          {
            id: '2',
            name: 'Taylor Specs 2025',
            player: this.bowlers[1],
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
        ]
      },
      {
        id: '3',
        gender: 'male',
        firstName: 'Xander',
        lastName: 'Stephens',
        usesThumb: true,
        rightHanded: true,
        arsenal: [],
        sheets: [
          {
            id: '3',
            name: 'Xander Specs 2025',
            player: this.bowlers[2],
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
        ]
      },
      {
        id: '4',
        gender: 'female',
        firstName: 'Molly',
        lastName: 'Burnet',
        usesThumb: true,
        rightHanded: false,
        arsenal: [],
        sheets: [
          {
            id: '4',
            name: 'Molly Specs 2025',
            player: this.bowlers[3],
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
        ]
      },
    ];
  }

  getBowlerById(id: string | undefined): BowlerInterface | undefined {
    if (id) {
      return this.bowlers?.find((b: BowlerInterface) => b.id === id);
    }
    return undefined;
  }

  setSpecSheets() {
    let ss: SpecSheetInterface[] = [];
    this.bowlers.forEach((bowler: BowlerInterface) => {
      bowler.sheets?.forEach((sheet: SpecSheetInterface) => ss.push(sheet));
    });
    this.specSheets = ss;
  }
}
