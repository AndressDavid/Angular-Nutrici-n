import { DietasService } from './services/dietas.service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { IDietas } from './interfaces/IDietas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-dietas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ListadoDietas.component.html',
  styleUrl: './ListadoDietas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoDietasComponent implements OnInit {
  public listadoDietas: IDietas[] = [];

  constructor(public dietasService: DietasService) {}

  ngOnInit(): void {
    this.obtenerListaDietas();
  }

  @Output() OutListadoProcedimientos: EventEmitter<IDietas[]> =
    new EventEmitter();

  obtenerListaDietas() {
    this.dietasService.obtenerListadoDietas().subscribe(
      (respuesta) => {
        const { data } = respuesta;
        this.listadoDietas = data;

        console.log(this.listadoDietas);

        // data.forEach(({ codigo, descripcion }: any) => {
        //   const procedimiento = {
        //     codigo: codigo,
        //     descripcion: descripcion,
        //   };

        //   this.listadoDietas.push(procedimiento);
        // });

        this.OutListadoProcedimientos.emit(this.listadoDietas);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
