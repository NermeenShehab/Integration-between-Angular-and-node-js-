import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Student } from '../_models/student.models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  //array of Student data
  private stdList: Student[] = [
    new Student(1, 'Nermeen', 20),
    new Student(2, 'Nero', 23),
    new Student(3, 'Dana', 15),
    new Student(4, 'Malek', 25),
    new Student(5, 'Ahmed', 24),
  ];

  //crud operation on StudentList
  listStd() {
    return this.stdList;
  }

  addStd(std: Student) {
    this.stdList.push(
      new Student(std._id, std.stdname, std.age)
    );
  }

  detailsStd = new Student();
  details(id: Number) {
    this.stdList.forEach((a) => {
      if (a._id == id) {
        this.detailsStd = a;
        this.detailsStd = a;
      }
    });
  }

  Deletedepart(_id: Number) {
    let i = -1;
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
        this.stdList.forEach((item) => {
          i++;
          if (item._id == _id) {
            this.stdList.splice(i, 1);
          }
        });
      }
    });

  }

  stdEdit = new Student();
  Edit(id: number) {
    this.stdList.forEach((std) => {
      if (std._id == id) {
        this.stdEdit._id = std._id;
        this.stdEdit.stdname = std.stdname;
        this.stdEdit.age = std.age;
      }
    });
  }

  save(id: any) {
    this.stdList.forEach((std) => {
      if (std._id == id) {
        std._id= this.stdEdit._id;
        std.stdname = this.stdEdit.stdname ;
        std.age =  this.stdEdit.age ;
      }
    });
  }
}
