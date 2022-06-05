import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student.models';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.css']
})
export class StdListComponent implements OnInit {

  students:Student[]=[]


  constructor(public stdserve:StudentService ) {

   }

  ngOnInit(): void {
    this.students= this.stdserve.listStd();


  }

}
