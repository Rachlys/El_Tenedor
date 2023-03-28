import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})

export class BusquedaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.clear()
    
    let [termino] = args

    let nuevoArray = value.filter( ( restaurante : any ) => {

      if( termino === ''){
               return ''
      }else{
         return restaurante.nombre.toLowerCase().includes( termino.toLowerCase()) 
      }
    })
    return nuevoArray;
  }

}
