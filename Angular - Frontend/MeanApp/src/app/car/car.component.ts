import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  BrandList: any;
  SelectedValue:any
  TypeList: any;

  constructor(private http:HttpClient,private service:BrandService) { }

  ngOnInit(): void {
    this.service.getBrandList().subscribe((data:any)=>{
      this.BrandList = data;
    })
    
    this.service.getTypeList().subscribe((data:any)=>{
      this.TypeList = data;
    })
  }
  onSubmit(data:any){
    this.http.post('http://localhost:3000/car',data).subscribe(()=>{
      console.log("result",data);
    })
  }
  changeBrand(e:any){
    console.log(e.target.value); 
  }
  changeType(e:any){
    console.log(e.target.value);
  }

}
