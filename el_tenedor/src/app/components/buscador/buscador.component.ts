import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  termino      : string = ''
  restaurantes : any = []
  todos_restaurantes : boolean = false

  constructor(
    private bbddService : BbddService
  ){
    this.bbddService.getRestaurantes().subscribe(
      (response) => {
        this.restaurantes = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {}

  todosRestaurantes() : void{
    this.todos_restaurantes = !this.todos_restaurantes
    console.log(this.todos_restaurantes)
  }

  keyDownRestaurantes() : void{
    this.todos_restaurantes = false
  }
}
