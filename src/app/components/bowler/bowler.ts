import { Component, Input } from '@angular/core';
import { BowlerService } from '../../services/bowler-service';
import { BowlerInterface } from '../../interfaces/interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bowler',
  imports: [RouterLink],
  templateUrl: './bowler.html',
  styleUrl: './bowler.scss'
})
export class Bowler {
  @Input() person: BowlerInterface | undefined;
}
