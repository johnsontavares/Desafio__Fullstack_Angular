import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../models/schools.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = 'https://api.exemplo.com/schools'; // ajuste a URL conforme necessário

  constructor(private http: HttpClient) {}

  getSchools(): Observable<School[]> {
     return this.http.get<School[]>(`${environment.url_development}/api/School/GetAll`)
  }

  updateSchool(school: School): Observable<School> {
    return this.http.put<School>(`${environment.url_development}/api/School/${school.codEscola}`, school)
  }

  addSchool(school: School): Observable<School> {
    return this.http.post<School>(`${environment.url_development}/api/School`, school)
  }

  deleteSchool(code: string): Observable<School> {
    console.log(`${environment.url_development}/api/School/${code}`)
    return this.http.delete<School>(`${environment.url_development}/api/School/${code}`)
  }

}
