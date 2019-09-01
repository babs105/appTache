import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }
  getTaches() {
    return this.http.get(`${environment.BASE_API_URL}/taches`);
  }
}
