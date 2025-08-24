import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spec-sheet',
  imports: [],
  templateUrl: './spec-sheet.html',
  styleUrl: './spec-sheet.scss'
})
export class SpecSheet {
  route: ActivatedRoute = inject(ActivatedRoute);
  bowlerId: number = -1;
  constructor() {
    this.bowlerId = Number(this.route.snapshot.params['id']);
  }
}
