import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-regalo',
  templateUrl: './restaurante-regalo.component.html',
  styleUrls: ['./restaurante-regalo.component.scss']
})
export class RestauranteRegaloComponent implements OnInit {

  @Input() titulo : any
  @Input() imagen : any

  constructor() { }

  ngOnInit(): void {
  }

}
