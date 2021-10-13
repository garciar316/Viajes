import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TuristaService {
  private API_SERVER = 'http://localhost:8080/turistas';
  constructor(private http: HttpClient) {}

  public getAllTuristas(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }

  public getById(id: any): Observable<any> {
    return this.http.get(this.API_SERVER + '/' + id);
  }

  public deleteById(id: any): Observable<any> {
    return this.http.delete(this.API_SERVER + '/delete/' + id);
  }

  public save(turista: any): Observable<any> {
    return this.http.post(this.API_SERVER, turista);
  }

  public update(turista: any): Observable<any> {
    return this.http.put(this.API_SERVER, turista);
  }
}
