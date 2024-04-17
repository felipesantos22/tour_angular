import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() name!: string;
  @Input() age!: number;
  @Input() data!: { email: string; password: number };
  year: number = 2024;
  show: boolean = true;

  showMessage (): void {
    console.log("Clique")
    this.show = !this.show;
  }
}
