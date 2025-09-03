import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BowlerInterface, SpecSheetInterface } from '../../interfaces/interfaces';
import { BowlerService } from '../../services/bowler-service';
import { IonicModule } from '@ionic/angular';
import { PitchArrows } from '../pitch-arrows/pitch-arrows';
import { CircularCut } from '../circular-cut/circular-cut';

@Component({
  selector: 'app-spec-sheet',
  imports: [IonicModule, PitchArrows, CircularCut],
  templateUrl: './spec-sheet.html',
  styleUrl: './spec-sheet.scss',
})
export class SpecSheet {
  router: Router = inject(Router);
  bowlerService: BowlerService = inject(BowlerService);
  specSheet: SpecSheetInterface | undefined;
  bowler: BowlerInterface | undefined;

  constructor() {
    this.setSpecSheet();
    this.setBowler();
  }

  getSheetIdFromURL(): string {
    let splitUrl = this.router.url.split(`/`);
    return splitUrl[splitUrl.length - 1];
  }

  getBowlerIdFromURL(): string {
    let splitUrl = this.router.url.split(`/`);
    return splitUrl[2];
  }

  setBowler(): void {
    let bowlerId = this.getBowlerIdFromURL();
    if (bowlerId) {
      this.bowler = this.bowlerService.bowlers.find((bowler: BowlerInterface) => {
        return bowler.id === bowlerId;
      });
    }
  }

  setSpecSheet(): void {
    let sheetId: string = this.getSheetIdFromURL();
    if (sheetId) {
      this.specSheet = this.bowlerService.specSheets.find((sheet: SpecSheetInterface) => sheetId === sheet.id);
    }
  }
}