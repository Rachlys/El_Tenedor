import { Component, OnInit } from '@angular/core';
import { Enlace } from 'src/app/interfaces/interfaces';
import { BbddService } from 'src/app/services/bbdd.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  enlaces : Array<Enlace> = []
  apps    : Array<any>    = [
    { href : '#' , title : 'App Store' , src : 'assets/img/apps/ios.svg' },
    { href : '#' , title : 'Google Play' , src : 'assets/img/apps/google.svg' },
  ]

  constructor(
    private bbddService : BbddService
  ){}

  ngOnInit(): void {

    this.bbddService.getEnlaces().subscribe(

      (response) => {
        this.enlaces = response;
        console.log(this.enlaces); },

      (error) => {
        console.error(error);
      }
    );
  }

}