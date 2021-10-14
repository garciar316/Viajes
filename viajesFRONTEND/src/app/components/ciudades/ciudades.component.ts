import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ViajeService } from 'src/app/services/viaje.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css'],
})
export class CiudadesComponent implements OnInit {
  ciudades: any;
  p: number = 1;
  viajes: any;
  constructor(
    private ciudadesService: CiudadService,
    private viajesService: ViajeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.leerDatos();
  }
  leerDatos() {
    this.ciudadesService.getAllCiudades().subscribe(
      (resp) => {
        this.ciudades = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  eliminar(ciudad: any) {
    this.viajesService.getAllByCiudad(ciudad.id).subscribe(
      (data) => {
        if (Object.keys(data).length == 0) {
          if (this.confirm(ciudad.id)) {
            this.ciudadesService.deleteById(ciudad.id).subscribe(
              (resp) => {
                window.location.reload();
              },
              (error) => {
                console.error(error);
              }
            );
          }
        } else {
          this.error();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  editar(id: any) {
    this.router.navigate(['ciudades/editar', id]);
  }
  verViajes(id: any) {
    this.router.navigate(['viajes/ciudad', id]);
  }
  error() {
    return window.alert(
      'No se puede eliminar la ciudad, porque tiene algunos viajes asociados'
    );
  }
  confirm(dato: any) {
    return window.confirm(
      'Seguro que desea eliminar el registro ' + dato + '?'
    );
  }
}
