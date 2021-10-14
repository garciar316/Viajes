import { Component, OnInit } from '@angular/core';
import { TuristaService } from 'src/app/services/turista.service';
import { ViajeService } from 'src/app/services/viaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turistas',
  templateUrl: './turistas.component.html',
  styleUrls: ['./turistas.component.css'],
})
export class TuristasComponent implements OnInit {
  turistas: any;
  p: number = 1;
  constructor(
    private turistaService: TuristaService,
    private viajeServices: ViajeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.leerDatos();
  }
  leerDatos() {
    this.turistaService.getAllTuristas().subscribe(
      (resp) => {
        this.turistas = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  eliminar(turista: any) {
    this.viajeServices.getAllByTurista(turista.id).subscribe(
      (data) => {
        if (Object.keys(data).length == 0) {
          let sw = window.confirm(
            'Seguro que desea eliminar el registro ' + turista.id
          );
          if (sw) {
            this.turistaService.deleteById(turista.id).subscribe(
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
    this.router.navigate(['turistas/editar', id]);
  }
  verViajes(id: any) {
    this.router.navigate(['viajes/turista', id]);
  }
  error() {
    window.alert(
      'No se puede eliminar el turista, porque tiene viajes asociados'
    );
  }
}
