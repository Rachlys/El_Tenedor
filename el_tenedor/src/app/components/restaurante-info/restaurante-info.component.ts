import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-info',
  templateUrl: './restaurante-info.component.html',
  styleUrls: ['./restaurante-info.component.scss']
})
export class RestauranteInfoComponent implements OnInit {


  @Input() oferta : any 

  nav : Array<string> = ['Descripción', 'Menú', 'Opiniones']
  position : number = 0

  constructor() { }

  ngOnInit(): void {
  }

  changePosition( newPosition : number ) : void{
    this.position = newPosition
  }

}
