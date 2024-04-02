import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registro-dietas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>RegistroDietas works!</p>`,
  styleUrl: './RegistroDietas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroDietasComponent { }
