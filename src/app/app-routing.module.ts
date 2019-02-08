import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './component/inicio/inicio.component';
import {ServicioComponent} from './component/servicio/servicio.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'servicio', component: ServicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
