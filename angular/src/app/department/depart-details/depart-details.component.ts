import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Depart } from 'src/app/_models/department.models';

import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-depart-details',
  templateUrl: './depart-details.component.html',
  styleUrls: ['./depart-details.component.css']
})
export class DepartDetailsComponent implements OnInit {


  depart:Depart=new Depart;


  constructor(public departserve:DepartmentService , public  actroute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.departserve.details(this.actroute.snapshot.params["id"]).subscribe(
      a=>this.depart=a
    )
  }

}
