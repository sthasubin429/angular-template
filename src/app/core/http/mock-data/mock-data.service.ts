import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<unknown> {
    return this.http.get<unknown>('https://613715dc8700c50017ef57b0.mockapi.io/api/users');
  }
}
