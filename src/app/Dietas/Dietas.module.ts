import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietasComponent } from './Dietas.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/Header/Header.component';
import { FooterComponent } from './Component/Footer/Footer.component';
import { GuardarComponent } from './Component/Guardar/Guardar.component';
import { ListadoDoctoresComponent } from './Component/ListadoDoctores/ListadoDoctores.component';
import { ObservacionesComponent } from './Component/Observaciones/Observaciones.component';
import { ListadoDietasComponent } from './Component/ListadoDietas/ListadoDietas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    GuardarComponent,
    ListadoDietasComponent,
    ListadoDoctoresComponent,
    ObservacionesComponent,
  ],
  declarations: [DietasComponent],
})
export class DietasModule {}
