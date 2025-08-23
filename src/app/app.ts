import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BowlerService } from './services/bowler-service';
import { BowlerInterface } from './interfaces/interfaces';
import { Bowler } from './components/bowler/bowler';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bowler],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bowling-spec-sheet');
  
  bowlerList: BowlerInterface[] | undefined;
  
  constructor (
    private bowlerService: BowlerService,
  ) {
    this.bowlerList = this.bowlerService.bowlers;
  }
}
