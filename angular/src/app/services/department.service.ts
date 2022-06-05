import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Depart } from '../_models/department.models';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseurl:string="http://localhost:27017/departments/"

  constructor(public http:HttpClient){

  }

  listdepart() {
   return this.http.get<Depart[]>(this.baseurl);

  }

  adddepart(dept: Depart) {
   return this.http.post<Depart[]>(this.baseurl,dept);

  }

details(id:string) {
  return this.http.get<Depart>(this.baseurl+""+id);
}

deletedepart(id:string) {
  return this.http.delete<Depart>(this.baseurl+""+id);
}

edit(dept:Depart) {
  return this.http.put<Depart>(this.baseurl+""+ dept._id,dept);
}
}
