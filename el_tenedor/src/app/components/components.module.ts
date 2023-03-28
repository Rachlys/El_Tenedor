import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaTheForkComponent } from './acerca-the-fork/acerca-the-fork.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { DescubreTarjetaComponent } from './descubre-tarjeta/descubre-tarjeta.component';
import { EresPropietarioComponent } from './eres-propietario/eres-propietario.component';
import { FooterComponent } from './footer/footer.component';
import { PropositosComponent } from './propositos/propositos.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { SanitazerPipe } from '../pipes/sanitazer.pipe';
import { RestauranteInfoComponent } from './restaurante-info/restaurante-info.component';
import { RestauranteMenuComponent } from './restaurante-menu/restaurante-menu.component';
import { RestauranteRegaloComponent } from './restaurante-regalo/restaurante-regalo.component';
import { RestauranteOpinionesComponent } from './restaurante-opiniones/restaurante-opiniones.component';
import { RestauranteDescripComponent } from './restaurante-descrip/restaurante-descrip.component';
import { RestauranteCalendarComponent } from './restaurante-calendar/restaurante-calendar.component';



@NgModule({
  declarations: [
    AcercaTheForkComponent,
    BuscadorComponent,
    CabeceraComponent,
    ComoFuncionaComponent,
    DescubreTarjetaComponent,
    EresPropietarioComponent,
    FooterComponent,
    PropositosComponent,
    SliderComponent,
    SliderCardComponent,
    RestauranteInfoComponent,
    RestauranteMenuComponent,
    RestauranteRegaloComponent,
    RestauranteOpinionesComponent,
    RestauranteDescripComponent,
    RestauranteCalendarComponent,
  ],
  
  exports      : [
    AcercaTheForkComponent,
    BuscadorComponent,
    CabeceraComponent,
    ComoFuncionaComponent,
    DescubreTarjetaComponent,
    EresPropietarioComponent,
    FooterComponent,
    PropositosComponent,
    SliderComponent,
    SliderCardComponent,
    SanitazerPipe,
    RestauranteInfoComponent,
    RestauranteMenuComponent,
    RestauranteRegaloComponent,
    RestauranteOpinionesComponent,
    RestauranteDescripComponent,
    RestauranteCalendarComponent

  ],
  imports      : [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
