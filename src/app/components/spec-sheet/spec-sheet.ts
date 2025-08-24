import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BowlerInterface } from '../../interfaces/interfaces';
import { BowlerService } from '../../services/bowler-service';
import { Bowler } from '../bowler/bowler';

@Component({
  selector: 'app-spec-sheet',
  imports: [],
  templateUrl: './spec-sheet.html',
  styleUrl: './spec-sheet.scss'
})
export class SpecSheet {
  route: ActivatedRoute = inject(ActivatedRoute);
  bowlerService: BowlerService = inject(BowlerService);
  bowler: BowlerInterface | undefined;

  constructor() {
    this.bowler = this.bowlerService.getBowlerById(this.getUrlId());
  }

  getUrlId(): string {
    return this.route.snapshot.params['id'];
  }
}
