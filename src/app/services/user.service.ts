import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/users`)
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/users/${id}`)
  }
  saveUpdate(id: any, formValue: any) {
    return this.httpClient.put(`${this.baseUrl}/users/${id}`, formValue)
  }

  getUserById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/users/${id}`)
  }

  addUser(formValue: any) {
    return this.httpClient.post(`${this.baseUrl}/articles`, formValue)
  }
}
