import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Country } from '../interfaces/Country';
import { listOfCountries } from '../data/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // showMessage(): void {
  //   console.log('Clique');
  //   this.show = !this.show;
  // }

  query: string = '';
  listOfCountries: Country[] = listOfCountries;
  filteredCountries: Country[] = listOfCountries.slice(); // Nova propriedade para armazenar os resultados filtrados

  search() {
    this.filteredCountries = this.listOfCountries.filter((item) => {
      return item.name.toLowerCase().includes(this.query.toLowerCase());
    });
  }

}
