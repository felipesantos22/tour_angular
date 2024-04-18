import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, CardComponent, CarouselComponent],
})
export class AppComponent {
  // title = 'tour';
  name: string = 'Felipe Virissimo Dos Santos';
  age: number = 33;
  data = {
    email: 'felipevs2018@gmail.com',
    password: 123456,
  };
}
