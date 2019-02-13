import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './component/inicio/inicio.component';
import {ServicioComponent} from './component/servicio/servicio.component';
import {DwebComponent} from './component/dweb/dweb.component';
import {StecnicoComponent} from './component/stecnico/stecnico.component';
import {DgraficoComponent} from './component/dgrafico/dgrafico.component';
import {TecnologiaComponent} from './component/tecnologia/tecnologia.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'dweb', component: DwebComponent},
  {path: 'dgrafico', component: DgraficoComponent},
  {path: 'stecnico', component: StecnicoComponent},
  {path: 'tecnologia', component: TecnologiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
