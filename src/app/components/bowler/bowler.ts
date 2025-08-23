import { Component, Input } from '@angular/core';
import { BowlerService } from '../../services/bowler-service';
import { BowlerInterface } from '../../interfaces/interfaces';

@Component({
  selector: 'app-bowler',
  imports: [],
  templateUrl: './bowler.html',
  styleUrl: './bowler.scss'
})
export class Bowler {
  @Input() person: BowlerInterface | undefined;
    
  constructor (
    private bowlerService: BowlerService,
  ) {
    
  }
}
