import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { IndicecorporalComponent } from './componentes/indicecorporal/indicecorporal.component';
import { SueldoComponent } from './componentes/sueldo/sueldo.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalculadoraComponent,
    NotasComponent,
    IndicecorporalComponent,
    SueldoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
