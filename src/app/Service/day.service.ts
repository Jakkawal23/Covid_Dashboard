import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Day } from './type';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  
  constructor(private http:HttpClient) { }

  getCovidDay(){
    return this.http.get<Day[]>('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all');
  }
}
