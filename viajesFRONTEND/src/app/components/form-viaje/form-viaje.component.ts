import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TuristaService } from 'src/app/services/turista.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import { ViajeService } from 'src/app/services/viaje.service';

@Component({
  selector: 'app-form-viaje',
  templateUrl: './form-viaje.component.html',
  styleUrls: ['./form-viaje.component.css'],
})
export class FormViajeComponent implements OnInit {
  viajeForm!: FormGroup;
  idViaje: any;
  sw: boolean = false;
  error: boolean = false;
  turistas: any;
  ciudades: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private viajeService: ViajeService,
    private turistaService: TuristaService,
    private ciudadService: CiudadService
  ) {}

  ngOnInit(): void {
    this.viajeForm = this.formBuilder.group({
      id: [''],
      ciudad: ['', Validators.required],
      turista: ['', Validators.required],
      fecha: ['', Validators.required],
      presupuesto: ['', Validators.required],
      tarjetaCredito: ['', Validators.required],
    });
    this.obtenerTuristas();
    this.obtenerCiudades();
    this.editar();
  }

  guardar() {
    this.sw = false;
    this.error = false;
    this.viajeService.save(this.viajeForm.value).subscribe(
      (resp) => {
        this.viajeForm.reset();
        this.sw = true;
      },
      (error) => {
        if (error.status == 423) {
          this.error = true;
        }
      }
    );
  }

  obtenerTuristas() {
    this.turistaService.getAllTuristas().subscribe(
      (resp) => {
        this.turistas = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerCiudades() {
    this.ciudadService.getAllCiudades().subscribe(
      (resp) => {
        this.ciudades = resp;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editar() {
    this.idViaje = this.route.snapshot.paramMap.get('id');
    if (this.idViaje) {
      this.viajeService.getById(this.idViaje).subscribe(
        (resp) => {
          this.viajeForm.setValue({
            id: resp.id,
            ciudad: resp.ciudad,
            turista: resp.turista,
            fecha: resp.fecha,
            presupuesto: resp.presupuesto,
            tarjetaCredito: resp.tarjetaCredito,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
