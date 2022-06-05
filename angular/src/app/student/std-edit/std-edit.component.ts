import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-std-edit',
  templateUrl: './std-edit.component.html',
  styleUrls: ['./std-edit.component.css']
})
export class StdEditComponent implements OnInit {


  constructor(public stdServe:StudentService , public  actroute:ActivatedRoute) {

  }

 ngOnInit(): void {
   this.stdServe.save(this.actroute.snapshot.params["id"])
 }
}
