import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student.models';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-std-add',
  templateUrl: './std-add.component.html',
  styleUrls: ['./std-add.component.css']
})
export class StdAddComponent implements OnInit {

  std:Student= new Student();

 save(){
  this.stdServe.addStd(this.std);
  this.rout.navigateByUrl("/students")
 }

  constructor(public stdServe:StudentService ,public rout:Router) { }

  ngOnInit(): void {
  }
}
