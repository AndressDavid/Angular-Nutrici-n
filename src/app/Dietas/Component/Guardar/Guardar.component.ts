import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [CommonModule],
  template: `<button
    type="submit"
    class="btn btn-outline-secondary btn-lg btn-block container-fluid"
  >
    Guardar
  </button>`,
  styleUrl: './Guardar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuardarComponent {}
