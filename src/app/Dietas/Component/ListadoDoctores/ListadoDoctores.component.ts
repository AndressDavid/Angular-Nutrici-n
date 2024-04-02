import { DoctoresService } from './services/doctores.service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDoctores } from './interfaces/IDoctores';

@Component({
  selector: 'app-listado-doctores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ListadoDoctores.component.html',
  styleUrl: './ListadoDoctores.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoDoctoresComponent implements OnInit {
  public listadoDoctores: IDoctores[] = [];

  constructor(public doctoresService: DoctoresService) {}

  ngOnInit(): void {
    this.obtenerListaDoctores();
  }

  @Output() OutListadoDoctores: EventEmitter<IDoctores[]> = new EventEmitter();

  obtenerListaDoctores() {
    this.doctoresService.obtenerListadoDoctores().subscribe(
      (respuesta) => {
        const { data } = respuesta;
        this.listadoDoctores = data;
        console.log(this.listadoDoctores);
        // data.forEach(({ usumed, nommed }: any) => {
        //   const procedimiento = {
        //     usuario: usumed,
        //     nombre: nommed,
        //   };
        //   this.listadoDoctores.push(procedimiento);
        // });
        // console.table(this.listadoProcedimientos);
        this.OutListadoDoctores.emit(this.listadoDoctores);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
