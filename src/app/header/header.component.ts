import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAVIGATION_ITEMS } from '../../models/navigation.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navigationItems = NAVIGATION_ITEMS;
  username = "Anees ur Rehman";
}
