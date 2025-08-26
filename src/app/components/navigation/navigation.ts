import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationInterface } from '../../interfaces/interfaces';
import { NAVLINKS } from '../constants/constants'

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
  navLinks: NavigationInterface[];

  constructor() {
    this.navLinks = NAVLINKS;
  }
}
