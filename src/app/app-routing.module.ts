import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { IndicecorporalComponent } from './componentes/indicecorporal/indicecorporal.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { SueldoComponent } from './componentes/sueldo/sueldo.component';

const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'indice', component: IndicecorporalComponent},
  { path: 'sueldo', component: SueldoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
