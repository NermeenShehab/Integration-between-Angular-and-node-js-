import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartAddComponent} from './depart-add/depart-add.component'
import { DepartDetailsComponent } from './depart-details/depart-details.component';
import { FormsModule } from '@angular/forms';
import { DepartListComponent } from './depart-list/depart-list.component';
import { DepartEditComponent } from './depart-edit/depart-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [
    DepartDetailsComponent,DepartAddComponent,DepartListComponent,DepartEditComponent

  ],
exports:[
  DepartDetailsComponent,DepartAddComponent,DepartListComponent,DepartEditComponent

]
})
export class DepartmentModule { }
