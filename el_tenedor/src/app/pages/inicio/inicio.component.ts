import { Component, OnInit } from '@angular/core';
import { BbddService } from 'src/app/services/bbdd.service';
import { DomSanitizer } from '@angular/platform-browser';
import {} from '../pages.module'

@Component({
  selector    : 'app-inicio',
  templateUrl : './inicio.component.html',
  styleUrls   : ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  sliders      : Array<any> = []
  slidersMundo : Array<any> = []

  constructor(
    private bbddService : BbddService
  ){
  }
  ngOnInit(): void {

    this.bbddService.getSliders().subscribe(

      (response) => {
        this.sliders = response;
        console.log(this.sliders); },

      (error) => {
        console.error(error);
      }
    );


    this.bbddService.getCiudades().subscribe(
      (response) => {
        this.slidersMundo = [
          {
            titulo         : 'Otras ciudades en España',
            flechas        : true ,
            numElemVisible : 5 ,
            restaurantes   : response.filter(cadaCiudad => cadaCiudad.pais === 'espana')
          },
          {
            titulo         : 'TheFork por el mundo',
            flechas        : true ,
            numElemVisible : 4 ,
            restaurantes   : response.filter(cadaCiudad => cadaCiudad.pais !== 'espana')
          }
        ];
      },
      (error) => {
        console.error(error);
      }
    );


  }

}
