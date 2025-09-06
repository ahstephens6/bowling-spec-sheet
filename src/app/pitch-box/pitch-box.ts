import { Component, Input } from '@angular/core';
import { Pitches } from '../interfaces/interfaces';

@Component({
  selector: 'app-pitch-box',
  imports: [],
  templateUrl: './pitch-box.html',
  styleUrl: './pitch-box.scss'
})
export class PitchBox {
  @Input() pitch: number = 0;
  
  constructor() {
    
  }
}
