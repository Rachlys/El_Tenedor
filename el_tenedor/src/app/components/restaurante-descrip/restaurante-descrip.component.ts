import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-descrip',
  templateUrl: './restaurante-descrip.component.html',
  styleUrls: ['./restaurante-descrip.component.scss']
})
export class RestauranteDescripComponent implements OnInit {

  @Input() restaurante : any

  constructor() { }

  ngOnInit(): void {
  }

}
