import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-calendar',
  templateUrl: './restaurante-calendar.component.html',
  styleUrls: ['./restaurante-calendar.component.scss']
})
export class RestauranteCalendarComponent implements OnInit {

  months : Array<string> = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  days : Array<string> = ["LUN", "MAR", "MIÉ", "JUEV", "VIE", "SÁB", "DOM"]

  slideTranslate : number = 0

  actualYear : number = 0
  actualMonthName : string = ''
  actualMonthNumber : number = 0
  actualDays : number = 0
  actualArrayDays : Array<any> = []
  firstDayPosition : number = 0
  firstDayClass : string = ''

  month_name_2 : string = ''
  month_number_2 : number = 0
  total_days_2 : number = 0
  array_days_2 : Array<any> = []
  first_day_position_2 : number = 0
  first_day_class_2 : string = ''

  month_name_3 : string = ''
  month_number_3 : number = 0
  total_days_3 : number = 0
  array_days_3 : Array<any> = []
  first_day_position_3 : number = 0
  first_day_class_3 : string = ''

  constructor() { }

  ngOnInit(): void {
  this.getActualMonthAndDaysYear()
  this.getNextMonthDaysYear()
  this.getNextNextDaysMonthYear()
  }


  getActualMonthAndDaysYear() : void{
    const d = new Date();
    this.actualMonthNumber = d.getMonth()
    this.actualMonthName = this.months[d.getMonth()]
    this.actualYear = d.getFullYear()
    this.actualDays = new Date( this.actualYear , this.actualMonthNumber+1, 0).getDate()
    this.firstDayPosition = new Date(this.actualYear , this.actualMonthNumber, 1).getDay()
    this.firstDayClass = this.getPositionDay(this.firstDayPosition )
    console.log(this.actualMonthNumber , this.actualMonthName , this.actualYear, this.actualDays, this.firstDayPosition, this.firstDayClass)

    this.getArrays( this.actualDays, this.actualArrayDays)
    console.log(this.actualArrayDays)
  }

  getNextMonthDaysYear() : void{
    const d = new Date();
    this.month_number_2 = d.getMonth()+1
    this.month_name_2 = this.months[d.getMonth()+1]
    this.total_days_2 = new Date( this.actualYear , this.month_number_2+1, 0).getDate()
    this.first_day_position_2 = new Date(this.actualYear , this.month_number_2, 1).getDay()
    this.first_day_class_2 = this.getPositionDay(this.first_day_position_2 )

    this.getArrays( this.total_days_2, this.array_days_2)

    console.log(this.month_number_2 , this.month_name_2 , this.actualYear, this.total_days_2)
  }

  getNextNextDaysMonthYear() : void{
    const d = new Date();
    this.month_number_3 = d.getMonth()+2
    this.month_name_3 = this.months[d.getMonth()+2]
    this.total_days_3 = new Date( this.actualYear , this.month_number_3+1, 0).getDate()
    this.first_day_position_3 = new Date(this.actualYear , this.month_number_3, 1).getDay()
    this.first_day_class_3 = this.getPositionDay(this.first_day_position_3 )

    this.getArrays( this.total_days_3, this.array_days_3)

    console.log(this.month_number_3 , this.month_name_3 , this.actualYear, this.total_days_3)
  }

  getArrays( number : number , numeros : Array<any>) : void{
    for (let index = 1; index < number+1 ; index++) {
      numeros.push(index)
    }

  }

  getPositionDay( position : number) : string{
      if( position === 0){
        return 'sunday'
      }if( position === 1){
        return 'monday'
      }if( position === 2){
        return 'tuesday'
      }if( position === 3){
        return 'wednesday'
      }if( position === 4){
        return 'thursday'
      }if( position === 5){
        return 'friday'
      }if( position === 6){
        return 'saturday'
      }else{
        return ''
      }
  }

calcularTransform() : string{
  return `translateX(${this.slideTranslate }%)`
}
  
aumentarSlide() : void{
  this.slideTranslate = this.slideTranslate-33.33
  if(this.slideTranslate < -66.66){
    this.slideTranslate = 0
  }
  console.log(this.slideTranslate)

}

disminuirSlide() : void{
  this.slideTranslate = this.slideTranslate+33.33
if(this.slideTranslate > 0 ){
  this.slideTranslate = -66.66
}
  console.log(this.slideTranslate)
}

}
