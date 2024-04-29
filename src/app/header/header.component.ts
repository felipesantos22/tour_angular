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
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  name: string = '';
  filteredCountries: Country[] = listOfCountries;
  newFilter: Country[] = [];

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.newFilter = listOfCountries.filter((country) => {
      return country.name.toLowerCase().includes(value);
    });
  }

  // searchByName(name: string): Country[] {
  //   const searchTerm = name.toLowerCase();
  //   return listOfCountries.filter((country) =>
  //     country.name.toLowerCase().includes(searchTerm)
  //   );
  // }

  // test() {
  //   console.log(this.searchByName(this.name));
  // }

  @Input() sortCountriesByName!: () => void;
  @Input() sortCountriesByPrice!: () => void;
  @Input() sortCountriesByPriceAsc!: () => void;
}
