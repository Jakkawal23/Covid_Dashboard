import { Component } from '@angular/core';
import { ProvinceService } from '../Service/province.service';
import { Country } from '../Service/type';

@Component({
  selector: 'app-province-info',
  templateUrl: './province-info.component.html',
  styleUrls: ['./province-info.component.css']
})
export class ProvinceInfoComponent {
  provinceinfo : any ;
  temp : any =  {};
  searchinfo   : any =  {};
  provinceInput : string = "";
  // provincetemp : Country[] = [];
  // searchindex : number | undefined ;
  constructor(private service:ProvinceService){
    this.service.getCovidProvince().subscribe( response =>{
      this.provinceinfo = response;
      this.condition();
    })
  }

  condition(){
    for (let index = 0; index < (this.provinceinfo.length)-1; index++) {
      if(this.provinceinfo[index+1].new_case>this.provinceinfo[index].new_case){
        this.temp = this.provinceinfo[index+1];
        this.provinceinfo[index+1] = this.provinceinfo[index];
        this.provinceinfo[index] = this.temp;
        index = -1 ;
      }
    }
  }
  searchProvince(){
    for (let index = 0; index < this.provinceinfo.length; index++) {
      if(this.provinceinfo[index].province === this.provinceInput ){
        this.searchinfo = this.provinceinfo[index];
        this.provinceInput = "";
      }
    }
  }
  
  buttonProvince(num:number){
     for (let index = 0; index < this.provinceinfo.length; index++) {
        if(index === num ){
          this.searchinfo = this.provinceinfo[index];
        }
     }
  }

  // butt(){
  //   for (let i = 0; i < (this.provinceinfo.length)-1; i++) {
  //     if((this.provinceinfo[i+1].new_case)>(this.provinceinfo[i].new_case)){
        
  //     }
  //   }
  // }
}
