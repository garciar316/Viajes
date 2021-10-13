import { Component, OnInit } from '@angular/core';
import { ViajeService } from 'src/app/services/viaje.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css'],
})
export class ViajesComponent implements OnInit {
  viajes: any;
  destino: any;
  id: any;
  p: number = 1;
  constructor(
    private viajeService: ViajeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.leerDatos();
  }
  leerDatos() {
    this.destino = this.route.snapshot.paramMap.get('destino');
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.destino && this.id) {
      switch (this.destino) {
        case 'turista':
          this.leerPorTurista(this.id);
          break;
        case 'ciudad':
          this.leerPorCiudad(this.id);
          break;
        default:
          this.router.navigate(['viajes']);
      }
    } else {
      this.leerTodos();
    }
  }
  leerTodos() {
    this.viajeService.getAll().subscribe(
      (resp) => {
        this.viajes = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  leerPorTurista(id: any) {
    this.viajeService.getAllByTurista(id).subscribe(
      (resp) => {
        this.viajes = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  leerPorCiudad(id: any) {
    this.viajeService.getAllByCiudad(id).subscribe(
      (resp) => {
        this.viajes = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  eliminar(viaje: any) {
    let sw = window.confirm(
      'Seguro que desea eliminar el registro ' + viaje.id
    );
    if (sw) {
      this.viajeService.deleteById(viaje.id).subscribe(
        (resp) => {
          window.location.reload();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  editar(viaje: any) {
    this.router.navigate(['viajes/editar', viaje.id]);
  }

  detalles(viaje: any) {
    this.router.navigate(['viajes/detalle', viaje.id]);
  }
}
