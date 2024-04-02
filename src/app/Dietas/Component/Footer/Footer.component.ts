import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Adios</p>`,
  styleUrl: './Footer.component.css',
})
export class FooterComponent {}
