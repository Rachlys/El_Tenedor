import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})

export class RestauranteComponent implements OnInit {

  infoRestaurante : any 
  restaurantes : any
  ready : boolean = false

  constructor(
    private activatedRoute : ActivatedRoute,
    private bbddService    : BbddService
  ){}

  ngOnInit(): void {

    this.bbddService.getRestaurantes().subscribe(
      (response) => {
        this.restaurantes = response;
        console.log(this.restaurantes);
        
        this.activatedRoute.params.subscribe(({ nombre }) => {
          this.infoRestaurante = this.restaurantes.find(
            (cadaRestaurante: any) => cadaRestaurante.url === nombre
          );
          this.ready = true
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
