import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { DepartAddComponent } from './department/depart-add/depart-add.component';
import { DepartDetailsComponent } from './department/depart-details/depart-details.component';
import { DepartEditComponent } from './department/depart-edit/depart-edit.component';
import { DepartListComponent } from './department/depart-list/depart-list.component';
import { StdAddComponent } from './student/std-add/std-add.component';
import { StdDetailsComponent } from './student/std-details/std-details.component';
import { StdEditComponent } from './student/std-edit/std-edit.component';
import { StdListComponent } from './student/std-list/std-list.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},
{path:"contactus",component:ContactUsComponent},
{path:"aboutus",component:AboutUsComponent},
{path:"",component:HomeComponent},
{path:"",redirectTo:"home",pathMatch:"full"},

//dept
{path:"departments",component:DepartListComponent},
{path:"departments/add",component:DepartAddComponent},
{path:"departments/details/:id",component:DepartDetailsComponent},
{path:"departments/edit/:id",component:DepartEditComponent},
//std
{path:"students",component:StdListComponent},
{path:"students/add",component:StdAddComponent},
{path:"students/details/:id",component:StdDetailsComponent},
{path:"students/edit/:id",component:StdEditComponent},


{path:"**",component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
