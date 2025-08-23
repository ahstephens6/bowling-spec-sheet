import { Component, Input } from '@angular/core';
import { BowlerService } from '../../services/bowler-service';
import { BowlerInterface } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

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
    private router: Router,
  ) {
    // Empty 
  }

  goToSpecSheet() {
    this.router.navigate([])
  }
}
