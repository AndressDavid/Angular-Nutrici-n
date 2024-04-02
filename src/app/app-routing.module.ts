import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietasComponent } from './Dietas/Dietas.component';

const routes: Routes = [
  {
    path: '',
    component: DietasComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
