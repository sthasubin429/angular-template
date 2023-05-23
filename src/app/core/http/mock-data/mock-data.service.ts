import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mockData } from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<mockData[]> {
    return this.http.get<mockData[]>('https://613715dc8700c50017ef57b0.mockapi.io/api/users');
  }

  getDetail(id: string): Observable<mockData> {
    return this.http.get<mockData>(`https://613715dc8700c50017ef57b0.mockapi.io/api/users/${id}`);
  }
}
