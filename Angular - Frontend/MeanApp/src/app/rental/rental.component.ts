import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  CarList: any;

  constructor(private http:HttpClient,private service:BrandService) { }

  ngOnInit(): void {
    this.service.getCarList().subscribe((data:any)=>{
      this.CarList = data;
    })
  }
  onSubmit(data:any){
    this.http.post('http://localhost:3000/rental',data).subscribe(()=>{
      console.log("result",data);
    })
  }
  changeCar(e:any){
    console.log(e.target.value); 
  }
}