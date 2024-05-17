import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

    constructor(private http: HttpClient) { }

    getStudents() : Observable<Student[]>{
      console.log(`Service ${environment.url_development}/api/Student/GetAll`)
      return this.http.get<Student[]>(`${environment.url_development}/api/Student/GetAll`)
    }

    addNewStudent(newStudent: Student): Observable<Student>{
      return this.http.post<Student>(`${environment.url_development}/api/Student`, newStudent)
    }

    editStudent(code: string,EditStudent: Student): Observable<Student>{
      return this.http.put<Student>(`${environment.url_development}/api/Student/${code}`, EditStudent)
    }

    deleteStudent(code: string): Observable<Student>{
      return this.http.delete<Student>(`${environment.url_development}/api/Student/${code}`)
    }

    searchStudent(search: string): Observable<Student[]>{
      return this.http.get<Student[]>(`${environment.url_development}/api/Student/findElement/${search}`)
    }


}
