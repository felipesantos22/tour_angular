import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { Country } from '../interfaces/Country';
import { listOfCountries } from '../data/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // showMessage(): void {
  //   console.log('Clique');
  //   this.show = !this.show;
  // }

  filteredCountries: Country[] = listOfCountries;

  // Ordenação alfabética
  sortCountriesByName(): void {
    this.filteredCountries = listOfCountries.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  // Menor preço para maior
  sortCountriesByPrice(): void {
    this.filteredCountries = listOfCountries.sort((a, b) => a.price - b.price);
  }

  // Maior preço para o menor
  sortCountriesByPriceAsc(): void {
    this.filteredCountries = listOfCountries.sort((a, b) => b.price - a.price);
  }

  // Ordenação por preço no select
  sortCountriesByNames(event: Event | null): void {
    const target = event?.target as HTMLSelectElement;
    const selectedValue = target.value;
    if (selectedValue === 'asc') {
      this.filteredCountries = listOfCountries.sort(
        (a, b) => a.price - b.price
      );
    }
    if (selectedValue === 'desc') {
      this.filteredCountries = listOfCountries.sort(
        (a, b) => b.price - a.price
      );
    } else if (selectedValue === 'alfa') {
      this.filteredCountries = listOfCountries.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
  }
}
