import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViajeService {
  private API_SERVER = 'http://localhost:8080/viajes';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }

  public getById(id: any): Observable<any> {
    return this.http.get(this.API_SERVER + '/' + id);
  }

  getAllByTurista(id: any) {
    return this.http.get(this.API_SERVER + '/turista/' + id);
  }

  getAllByCiudad(id: any) {
    return this.http.get(this.API_SERVER + '/ciudad/' + id);
  }

  save(viaje: any) {
    return this.http.post(this.API_SERVER, viaje);
  }

  update(viaje: any) {
    return this.http.put(this.API_SERVER, viaje);
  }

  deleteById(id: any) {
    return this.http.delete(this.API_SERVER + '/delete/' + id);
  }
}
