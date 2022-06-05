import { Component, OnInit } from '@angular/core';

import { Depart } from '../../_models/department.models';

import { DepartmentService } from '../../services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-depart-list',
  templateUrl: './depart-list.component.html',
  styleUrls: ['./depart-list.component.css']
})
export class DepartListComponent implements OnInit {
  departments:Depart[]=[]


  constructor(public departserve:DepartmentService  ) {

   }

   load(){

   }

  ngOnInit(): void {
  this.departserve.listdepart().subscribe(data=>{
    this.departments=data;
  })
  }


  delete(id:any){
     this.departserve.deletedepart(id).subscribe(data=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.departserve.listdepart().subscribe(data=>{
            this.departments=data;
          })
        }
      });
    })

  }

}
