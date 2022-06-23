import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CarComponent } from './car/car.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RentalComponent } from './rental/rental.component';
import { TypeComponent } from './type/type.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/navbar',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent,children:[
    {path:'',component:DetailsComponent},
    {path:'brand',component:BrandComponent},
    {path:'car',component:CarComponent},
    {path:'rental',component:RentalComponent},
    {path:'type',component:TypeComponent},
    {path:'user',component:UserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
