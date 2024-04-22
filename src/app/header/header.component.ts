import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() search!: (event: Event) => void;
  @Input() sortCountriesByName!: () => void;
  @Input() sortCountriesByPrice!: () => void;
  @Input() sortCountriesByPriceAsc!: () => void;
}
