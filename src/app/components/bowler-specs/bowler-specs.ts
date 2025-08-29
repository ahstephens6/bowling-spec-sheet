import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bowler-specs',
  imports: [],
  templateUrl: './bowler-specs.html',
  styleUrl: './bowler-specs.scss'
})
export class BowlerSpecs {
  @Input() bowlerId: string;

  router: Router = inject(Router);

  constructor() {
    this.bowlerId = this.getURLId();
  }

  getURLId(): string {
    let splitUrl = this.router.url.split(`/`);
    return splitUrl[splitUrl.length - 1];
  }
}
