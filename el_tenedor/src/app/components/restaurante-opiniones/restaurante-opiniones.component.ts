import { Component, HostListener, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-restaurante-opiniones',
  templateUrl: './restaurante-opiniones.component.html',
  styleUrls: ['./restaurante-opiniones.component.scss']
})
export class RestauranteOpinionesComponent implements OnInit {

  @Input() nota: any
  progress: number = 0
  number: number = 0
  total: number = 0
  showpop_up : boolean = false

  constructor() {
  }

  ngOnInit() {
  }


  getPorcentage(): string {
    this.progress = this.nota * 10;
    this.total = this.number = (283 * this.progress) / 100

    return ` ${this.total} 283`
  }

  getClasificacion(): string {
    if (this.nota >= 8) {
      return 'Sobresaliente'
    } else if (this.nota >= 6) {
      return 'Bien'
    } else if (this.nota === 5) {
      return 'Suficiente'
    } else {
      return 'Insuficiente'
    }
  }


  showPop() : void{
    document.body.style.overflow = 'hidden'
    this.showpop_up = true
  }

  closePop() : void{
    document.body.style.overflow = 'auto'
    this.showpop_up = false
  }


}

