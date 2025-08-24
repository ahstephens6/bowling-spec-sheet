import { Component } from '@angular/core';
import { BowlerService } from '../../services/bowler-service';
import { BowlerInterface} from '../../interfaces/interfaces';
import { Bowler } from '../bowler/bowler';

@Component({
  selector: 'app-bowler-page',
  imports: [Bowler],
  templateUrl: './bowler-page.html',
  styleUrl: './bowler-page.scss'
})
export class BowlerPage {
  
  bowlerList: BowlerInterface[] | undefined;
  
  constructor (
    private bowlerService: BowlerService,
  ) {
    this.bowlerList = this.bowlerService.bowlers;
  }
}
