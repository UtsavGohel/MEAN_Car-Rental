import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  RentalList: any;

  constructor(private http:HttpClient,private service:BrandService) { }

  ngOnInit(): void {
    this.service.getRentalList().subscribe((data:any)=>{
      this.RentalList = data;
    })
  }
  onSubmit(data:any){
    this.http.post('http://localhost:3000/user',data).subscribe(()=>{
      console.log("result",data);
    })
  }
  changeUser(e:any){
    console.log(e.target.value); 
  }

}
