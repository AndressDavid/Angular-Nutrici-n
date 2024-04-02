import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Hola</p>`,
  styleUrl: './Header.component.css',
})
export class HeaderComponent {}
