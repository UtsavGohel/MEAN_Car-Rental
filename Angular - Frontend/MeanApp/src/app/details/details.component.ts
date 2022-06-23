import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  BrandData: any;
  CarData: any;
  TypeData: any;
  UserData: any;

  constructor(private service:BrandService) { }
  
  ngOnInit(): void {
    this.service.getBrandData().subscribe(data=>{
      this.BrandData=data;
    })

    this.service.getCarData().subscribe(data=>{
      this.CarData=data;
    })
    this.service.getTypeData().subscribe(data=>{
      this.TypeData=data;
    })
    this.service.getUserData().subscribe(data=>{
      this.UserData=data;
    })
    
  }
}
