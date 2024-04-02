import { Component } from '@angular/core';
import { IDietas } from './Component/ListadoDietas/interfaces/IDietas';
import { IDoctores } from './Component/ListadoDoctores/interfaces/IDoctores';

@Component({
  selector: 'app-Dietas',
  templateUrl: './Dietas.component.html',
  styleUrls: ['./Dietas.component.css'],
})
export class DietasComponent {
  public listaProcedimientos: IDietas[] = [];

  public onGetListProcedimiento(listaProcedimientos: IDietas[]) {
    this.listaProcedimientos = listaProcedimientos;
    // console.log(listaProcedimientos);
  }

  public listaDoctores: IDoctores[] = [];

  public onGetListDoctor(listaDoctores: IDoctores[]) {
    this.listaDoctores = listaDoctores;
  }
}
