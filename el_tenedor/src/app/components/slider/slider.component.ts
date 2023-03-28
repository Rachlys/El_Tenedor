
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  @Input() titulo         : string = 'Título por defecto de un Slider'
  @Input() flechas        : boolean = false
  @Input() restaurantes   : any[] = []
  @Input() numElemVisible : number = 4
  
  numMovientos   : number = 0

  slideAncho     : number = 0
  slideTranslate : number = 0
  anchoCard      : number = 0 

  posicion : number = 0 

  constructor(){
  }

  ngOnInit(): void {
    this.numMovientos   = this.restaurantes.length / this.numElemVisible
    this.slideAncho     = this.numMovientos * 100 
    this.slideTranslate = 100 / this.numMovientos
    this.anchoCard      = 100 / this.restaurantes.length

    console.group( this.titulo )
      console.log( this.restaurantes.length )
      console.log( this.numElemVisible )
      console.log( this.numMovientos )
      console.log( this.slideAncho )
      console.log( this.slideTranslate )
      console.log( this.anchoCard )
    console.groupEnd()

    console.log(this.restaurantes)
    
  }

  calcularAncho() : string {
    return `${ this.numMovientos * 100 }%`
  }
  calcularTransform() : string {
    return `translateX(-${ this.posicion * this.slideTranslate }%)`
  }
  calcularGrid() : string {
    return `repeat( ${ this.restaurantes.length } , 1fr )`
  }
  aumentarRow() : void {
    this.posicion++
  }
  disminuirRow() : void {
    this.posicion--
  }
  
 

}
