import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BowlerInterface } from '../../interfaces/interfaces';
import { BowlerService } from '../../services/bowler-service';

@Component({
  selector: 'app-bowler-specs',
  imports: [],
  templateUrl: './bowler-specs.html',
  styleUrl: './bowler-specs.scss'
})
export class BowlerSpecs {
  bowlerService: BowlerService = inject(BowlerService);
  
  bowler: BowlerInterface | undefined;
  router: Router = inject(Router);

  constructor() {
    this.bowler = this.bowlerService.getBowlerById(this.getURLId());
  }

  getURLId(): string {
    let splitUrl = this.router.url.split(`/`);
    return splitUrl[splitUrl.length - 1];
  }
}
