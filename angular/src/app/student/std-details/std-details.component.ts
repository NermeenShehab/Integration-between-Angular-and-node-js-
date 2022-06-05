import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-std-details',
  templateUrl: './std-details.component.html',
  styleUrls: ['./std-details.component.css']
})
export class StdDetailsComponent implements OnInit {


  constructor(public stdServe:StudentService , public  actroute:ActivatedRoute) {

  }

 ngOnInit(): void {
   this.stdServe.details(this.actroute.snapshot.params["id"])
 }

}
