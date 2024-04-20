import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../interfaces/Country';
import { listOfCountries } from '../data/data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() filteredCountries!: Country[];

  ngOnInit() {
    if (!this.filteredCountries || this.filteredCountries.length === 0) {
      this.filteredCountries = listOfCountries;
    }
  }
}
