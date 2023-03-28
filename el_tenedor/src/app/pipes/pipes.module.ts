import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaPipe } from './busqueda.pipe';
import { SanitazerPipe } from './sanitazer.pipe';



@NgModule({
  declarations: [
    BusquedaPipe,
    SanitazerPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusquedaPipe,
    SanitazerPipe
  ]
})
export class PipesModule { }
