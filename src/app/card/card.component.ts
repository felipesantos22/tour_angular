import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { listOfCountries } from '../data/data';
import { Country } from '../interfaces/Country';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  listOfCountries: Country[] = listOfCountries;
}
