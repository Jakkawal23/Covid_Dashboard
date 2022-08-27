import { Component } from '@angular/core';
import { DayService } from '../Service/day.service';
import { Day } from '../Service/type';

@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.css']
})
export class DayInfoComponent {
  dayinfo : Day[] = []  ;
  constructor(private service:DayService){
    this.service.getCovidDay().subscribe(response=>{
      this.dayinfo = response;
    })
  }
}
