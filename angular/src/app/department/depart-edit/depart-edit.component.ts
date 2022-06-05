import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Depart } from 'src/app/_models/department.models';

import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-depart-edit',
  templateUrl: './depart-edit.component.html',
  styleUrls: ['./depart-edit.component.css']
})
export class DepartEditComponent implements OnInit {


  dept=new Depart();

  save(){
    this.dep.edit(this.dept).subscribe(a=>{
      console.log(a);
    })
  }

    constructor(public dep:DepartmentService ,public actroute:ActivatedRoute ,public r:Router){ }

    ngOnInit(): void {
      this.dep.details(this.actroute.snapshot.params["id"]).subscribe(a=>{
        this.dept=a;


      })
    }

    update(){
      this.dep.edit(this.dept).subscribe(data=>{
        this.r.navigateByUrl("/departments")
      })
    }

}
