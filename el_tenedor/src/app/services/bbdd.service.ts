import { Injectable } from '@angular/core';
import { Ciudades, Datos, Enlace, Ofertas } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http'; 
import { forkJoin, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BbddService {

  ofertas : Array<Ofertas> = []

  ciudades : Array<Ciudades> = []
  restaurantes : Array<Datos> = [
    
  ]

  enlaces : Array<Enlace> = [
    { href : 'https://quienessomos.eltenedor.es/', title : '¿Quiénes somos?' , target : true },
    { href : '/yums'              , title : 'Programa Yums'},
    { href : '/contacto'          , title : 'Información de contacto'},
    { href : '/condiciones'       , title : 'Condiciones de uso' },
    { href : 'https://www.theforkmanager.com/es-es/b2c-referral' , title : '¿Tienes un restaurante?' , target : true },
    { href : '/privacidad'        , title : 'Declaración de Privacidad y Cookies'},
    { href : 'https://support.eltenedor.es/'    , title : 'Preguntas frecuentes' , target : true },
    { href : 'https://careers.thefork.com/'     , title : 'Trabaja con nosotros' , target : true },
    { href : '/blog'              , title : 'Blog'},
    { href : 'https://guide.michelin.com/es/es' , title : 'Colaboración Guía MICHELIN' , target : true },
    { href : '/tarjeta-de-regalo' , title : 'Tarjeta Regalo TheFork'},
  ]

  constructor(
    private http : HttpClient
  ){ 
  }


  getOfertas(): Observable<Datos[]> {
    return this.http.get<Datos[]>('https://app-fork-express.onrender.com/ofertas')
  }

  getRestaurantes() : Observable<Datos[]>{
    return this.http.get<Datos[]>('https://app-fork-express.onrender.com/restaurantes')
  }

  getEnlaces() : Observable<Enlace[]>{
    return this.http.get<Enlace[]>('https://app-fork-express.onrender.com/enlaces')
  }

  getCiudades() : Observable<Ciudades[]>{
    return this.http.get<Ciudades[]>('https://app-fork-express.onrender.com/ciudades')
  }

  getSliders(): Observable<any[]> {
    return forkJoin({
      ofertas: this.getOfertas(),
      restaurantes: this.getRestaurantes()
    }).pipe(
      map(({ ofertas, restaurantes }) => {
        return [
          {
            titulo: 'Selecciones de TheFork',
            flechas: true,
            numElemVisible: 4,
            restaurantes: ofertas
          },
          {
            titulo: 'Selecciones para ti',
            flechas: true,
            numElemVisible: 4,
            restaurantes: restaurantes
          },
          {
            titulo: 'Mejores restaurantes de Madrid',
            flechas: true,
            numElemVisible: 4,
            restaurantes: restaurantes.filter(cadaRestaurante => cadaRestaurante.ciudad === 'madrid')
          },
          {
            titulo: 'Mejores restaurantes de Cádiz',
            flechas: true,
            numElemVisible: 4,
            restaurantes: restaurantes.filter(cadaRestaurante => cadaRestaurante.ciudad === 'cadiz')
          },
          {
            titulo: 'Mejores restaurantes de Barcelona',
            flechas: true,
            numElemVisible: 4,
            restaurantes: restaurantes.filter(cadaRestaurante => cadaRestaurante.ciudad === 'barcelona')
          }
        ];
      })
    );
  }
}
