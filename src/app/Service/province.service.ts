import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './type';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  
  constructor(private http:HttpClient) { }

  getCovidProvince(){
    return this.http.get<Country[]>('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces');
  }
}
