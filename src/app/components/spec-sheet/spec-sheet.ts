import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BowlerInterface, SpecSheetInterface } from '../../interfaces/interfaces';
import { BowlerService } from '../../services/bowler-service';

@Component({
  selector: 'app-spec-sheet',
  imports: [],
  templateUrl: './spec-sheet.html',
  styleUrl: './spec-sheet.scss'
})
export class SpecSheet {
  route: ActivatedRoute = inject(ActivatedRoute);
  bowlerService: BowlerService = inject(BowlerService);
  specSheet: SpecSheetInterface | undefined;

  constructor() {
    // Empty
  }
}
