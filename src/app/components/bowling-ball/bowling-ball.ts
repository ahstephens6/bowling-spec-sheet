import { Component } from '@angular/core';
import { BowlingBallInterface } from '../../interfaces/interfaces';


@Component({
  selector: 'app-bowling-ball',
  imports: [],
  templateUrl: './bowling-ball.html',
  styleUrl: './bowling-ball.scss'
})
export class BowlingBall {
  bowlingBallData: BowlingBallInterface | undefined;

  constructor() {
    // Empty
  }
}
