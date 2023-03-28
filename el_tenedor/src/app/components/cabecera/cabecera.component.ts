import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  showpop_up : boolean = false
  showChanges : boolean = false
  constructor() {
    
   }

  ngOnInit(): void {
  }
  
  showPop() : void{

    document.body.style.overflow = 'hidden'
    this.showpop_up = true

    setTimeout(() => {
      this.showChanges = true
    }, 100);

  }

  closePop() : void{
    document.body.style.overflow = 'auto'
    this.showpop_up = false
    this.showChanges = false
  }

}
