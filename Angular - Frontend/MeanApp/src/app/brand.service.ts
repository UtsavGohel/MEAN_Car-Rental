import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
 Brandurl = "http://localhost:3000/brand"
 Typeurl = "http://localhost:3000/type"
 Carurl = "http://localhost:3000/car"
 Rentalurl = "http://localhost:3000/rental"
  constructor(private http:HttpClient) { }

  getBrandList():Observable<any[]>{
    return this.http.get<any>(this.Brandurl)
  }
  getTypeList():Observable<any[]>{
    return this.http.get<any>(this.Typeurl)
  }
  getCarList():Observable<any[]>{
    return this.http.get<any>(this.Carurl)
  }
  getRentalList():Observable<any[]>{
    return this.http.get<any>(this.Rentalurl)
  }

  getBrandData(){
    return this.http.get('http://localhost:3000/brand')
  }  
  getCarData(){
    return this.http.get('http://localhost:3000/car')
  }
  getUserData(){
    return this.http.get('http://localhost:3000/user')
  }
  getTypeData(){
    return this.http.get('http://localhost:3000/type')
  }
}
