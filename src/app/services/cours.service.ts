import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  baseUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  getAllCourses(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/courses`)
  }

  deleteCours(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/courses/${id}`)
  }
  saveUpdate(id: any, formValue: any) {
    return this.httpClient.put(`${this.baseUrl}/courses/${id}`, formValue)
  }

  getCoursById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/courses/${id}`)
  }

  addCours(formValue: any) {
    return this.httpClient.post(`${this.baseUrl}/courses`, formValue)
  }
}
