import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ciudades, Datos, Restaurante } from 'src/app/interfaces/interfaces';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})

export class CiudadComponent implements OnInit {

  ciudades     : any = []
  restaurantes : any = []
  ready : boolean = false

  constructor(
    private activatedRoute : ActivatedRoute,
    private bbddService : BbddService
  ) {
  }

  ngOnInit(): void {   
  
  
    // Obtener la lista de ciudades
    this.bbddService.getCiudades().subscribe(
      (response) => {
        this.ciudades = response;
        // console.log(this.ciudades);

        // Obtener la ciudad específica por medio del parámetro "nombre" de la URL
        this.activatedRoute.params.subscribe(({ nombre }) => {
          this.ciudades = this.ciudades.find(
            (cadaCiudad: any) => cadaCiudad.url === nombre
          );
        });
      },
      (error) => {
        console.error(error);
      }
    );

    // Obtener la lista de restaurantes
    this.bbddService.getRestaurantes().subscribe(
      (response) => {
        this.restaurantes = response;


        // Obtener el restaurante específico por medio del parámetro "nombre" de la URL
        this.activatedRoute.params.subscribe(({ nombre }) => {
          this.restaurantes = this.restaurantes.filter(
            (cadaRestaurante : Restaurante ) => cadaRestaurante.ciudad === nombre
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






