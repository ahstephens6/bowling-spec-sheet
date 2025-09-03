import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BowlerInterface, SpecSheetInterface } from '../../interfaces/interfaces';
import { BowlerService } from '../../services/bowler-service';

@Component({
  selector: 'app-spec-sheet',
  imports: [],
  templateUrl: './spec-sheet.html',
  styleUrl: './spec-sheet.scss'
})
export class SpecSheet {
  router: Router = inject(Router);
  bowlerService: BowlerService = inject(BowlerService);
  specSheet: SpecSheetInterface | undefined;

  constructor() {
    this.setSpecSheet();
  }

  getSheetIdFromURL(): string {
    let splitUrl = this.router.url.split(`/`);
    return splitUrl[splitUrl.length - 1];
  }

  setSpecSheet(): void {
    let sheetId: string = this.getSheetIdFromURL();
    if (sheetId) {
      this.specSheet = this.bowlerService.specSheets.find((sheet: SpecSheetInterface) => sheetId === sheet.id);
    }
  }
}