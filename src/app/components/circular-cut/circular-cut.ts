import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-cut',
  imports: [],
  templateUrl: './circular-cut.html',
  styleUrl: './circular-cut.scss'
})
export class CircularCut {
  @Input() cut: Number = 0;

  constructor() {
    // Empty
  }
}
