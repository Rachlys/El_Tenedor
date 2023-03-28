import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss']
})
export class ComoFuncionaComponent implements OnInit {


  comoFunciona : Array<any> = [
    {
      src: 'assets/svg/estrella.svg',
      h4 : 'La mejor opción',
      p  : 'Una selección inigualable de restaurantes para todo lo que quieras'
    },
    {
      src: 'assets/svg/estrella.svg',
      h4 : 'Opiniones de los usuarios',
      p  : 'Recomendaciones y opiniones de una magnífica comunidad'
    },
    {
      src: 'assets/svg/descuento.svg',
      h4 : 'Ventajas exclusivas',
      p  : 'Ofertas en multitud de restaurantes y muchas otras ventajas con nuestro programa Yums.'
    },
    {
      src: 'assets/svg/reservas.svg',
      h4 : 'Sistema de reservas sencillo',
      p  : 'Reserva inmediata, gratuita y estés donde estés. Las 24 horas, los 7 días de la semana.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
