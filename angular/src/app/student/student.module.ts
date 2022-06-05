import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StdAddComponent } from './std-add/std-add.component';
import { StdDetailsComponent } from './std-details/std-details.component';
import { StdEditComponent } from './std-edit/std-edit.component';
import { StdListComponent } from './std-list/std-list.component';



@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule
  ],
  declarations: [
    StdAddComponent,StdDetailsComponent,StdEditComponent,StdListComponent

  ],
  exports:[
    StdAddComponent,StdDetailsComponent,StdEditComponent,StdListComponent,

  ],



})
export class StudentModule { }
