import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../interfaces/Country';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() filteredCountries!: Country[];
}
