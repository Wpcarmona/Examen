import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapasComponent } from './mapas/mapas.component';

const routes: Routes = [
  {
    path: 'mapa',
    component:MapasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
