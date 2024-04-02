import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-observaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Observaciones.component.html',
  styleUrl: './Observaciones.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservacionesComponent {}
