import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog/blog.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { CondicionesDeUsoComponent } from './condiciones-de-uso/condiciones-de-uso.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { TarjetasDeUsoComponent } from './tarjetas-de-uso/tarjetas-de-uso.component';
import { YumsComponent } from './yums/yums.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations : [
    BlogComponent,
    CiudadComponent,
    CondicionesDeUsoComponent,
    ContactoComponent,
    InicioComponent,
    PrivacidadComponent,
    RestauranteComponent,
    TarjetasDeUsoComponent,
    YumsComponent,
  ],
  exports      : [
    BlogComponent,
    CiudadComponent,
    CondicionesDeUsoComponent,
    ContactoComponent,
    InicioComponent,
    PrivacidadComponent,
    RestauranteComponent,
    RestauranteComponent,
    TarjetasDeUsoComponent,
    YumsComponent,
  ],
  imports      : [
    CommonModule,
    ComponentsModule,
    AppRoutingModule

  ]
})

export class PagesModule { }
