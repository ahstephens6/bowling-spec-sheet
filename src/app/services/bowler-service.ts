import { Injectable } from '@angular/core';
import { BowlerInterface, BowlingBallInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BowlerService {
  bowlers: BowlerInterface[] | undefined;

  constructor() {
    this.bowlers = this.getBowlers();
  }

  getBowlers(): BowlerInterface[] {
    return [
      {
        id: '1',
        gender: 'male',
        firstName: 'Jackson',
        lastName: 'McRae',
        usesThumb: false,
        rightHanded: true,
        arsenal: [],
      },
      {
        id: '2',
        gender: 'female',
        firstName: 'Taylor',
        lastName: 'Davis',
        usesThumb: true,
        rightHanded: true,
        arsenal: [],
      },
      {
        id: '3',
        gender: 'male',
        firstName: 'Xander',
        lastName: 'Stephens',
        usesThumb: true,
        rightHanded: true,
        arsenal: [],
      },
      {
        id: '4',
        gender: 'female',
        firstName: 'Molly',
        lastName: 'Burnet',
        usesThumb: true,
        rightHanded: false,
        arsenal: [],
      },
    ];
  }

  getBowlerById(id: string): BowlerInterface | undefined {
    return this.bowlers?.find((b: BowlerInterface) => b.id === id);
  }
}
