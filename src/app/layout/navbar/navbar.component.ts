import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navItems = [
    { link: 'Home', name: 'Home' },
    { link: 'Shop', name: 'Shop' },
    { link: 'About', name: 'About' },
    { link: 'Contact', name: 'Contact' },
  ];
}
