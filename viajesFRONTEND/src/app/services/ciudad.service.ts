import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CiudadService {
  private API_SERVER = 'http://localhost:8080/ciudades';
  constructor(private http: HttpClient) {}

  public getAllCiudades(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }

  public getById(id: any): Observable<any> {
    return this.http.get(this.API_SERVER + '/' + id);
  }

  public deleteById(id: any): Observable<any> {
    return this.http.delete(this.API_SERVER + '/delete/' + id);
  }

  public save(ciudad: any) {
    return this.http.post(this.API_SERVER, ciudad);
  }

  public update(id: any) {
    return this.http.put(this.API_SERVER, id);
  }
}
