import { Component, OnInit } from '@angular/core';
import { ViajeService } from 'src/app/services/viaje.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.component.html',
  styleUrls: ['./detalle-viaje.component.css'],
})
export class DetalleViajeComponent implements OnInit {
  viaje: any;
  constructor(
    private viajeService: ViajeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }
  obtenerDatos() {
    let idViaje = this.route.snapshot.paramMap.get('id');
    if (idViaje) {
      this.viajeService.getById(idViaje).subscribe(
        (resp) => {
          this.viaje = resp;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
