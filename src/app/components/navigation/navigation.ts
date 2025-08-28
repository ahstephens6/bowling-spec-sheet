import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { NavigationInterface } from '../../interfaces/interfaces';
import { NAVLINKS } from '../../constants/constants'

@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
  navLinks: NavigationInterface[];
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.navLinks = NAVLINKS;
  }

  isLinkActive(link: NavigationInterface): boolean {
    let [splitLink]: string[] = link.route.split(`/`);
    let splitRoute: string = this.router.url.split(`/`)[1];
    return splitLink == splitRoute;
  }
}
