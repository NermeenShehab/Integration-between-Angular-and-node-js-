import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Depart } from '../../_models/department.models';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-depart-add',
  templateUrl: './depart-add.component.html',
  styleUrls: ['./depart-add.component.css']
})
export class DepartAddComponent implements OnInit {

  dept:Depart= new Depart();

 save(){
  this.departserve.adddepart(this.dept).subscribe(adddata=>{
      console.log(adddata)

      this.rout.navigateByUrl("/departments")

  })

 }


  constructor(public departserve:DepartmentService ,public rout:Router ) { }

  ngOnInit(): void {

  }

}
