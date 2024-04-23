import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Country } from '../interfaces/Country';
import { listOfCountries } from '../data/data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  filteredCountries: Country[] = listOfCountries;

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.filteredCountries = listOfCountries.filter((country) => {
      return country.name.toLowerCase().includes(value);
    });
  }

  @Input() sortCountriesByName!: () => void;
  @Input() sortCountriesByPrice!: () => void;
  @Input() sortCountriesByPriceAsc!: () => void;
}
