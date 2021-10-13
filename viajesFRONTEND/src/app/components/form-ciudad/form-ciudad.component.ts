import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-ciudad',
  templateUrl: './form-ciudad.component.html',
  styleUrls: ['./form-ciudad.component.css'],
})
export class FormCiudadComponent implements OnInit {
  ciudadForm!: FormGroup;
  idCiudad: any;
  sw: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private ciudadService: CiudadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ciudadForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      cantHabitantes: ['', Validators.required],
      sitioMasVisitado: ['', Validators.required],
      hotelMasReservado: ['', Validators.required],
    });
    this.editar();
  }
  guardar(): void {
    this.sw = false;
    this.ciudadService.save(this.ciudadForm.value).subscribe(
      (resp) => {
        this.ciudadForm.reset();
        this.sw = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  editar(): void {
    this.idCiudad = this.route.snapshot.paramMap.get('id');
    if (this.idCiudad) {
      this.ciudadService.getById(this.idCiudad).subscribe(
        (resp) => {
          this.ciudadForm.setValue({
            id: resp.id,
            nombre: resp.nombre,
            cantHabitantes: resp.cantHabitantes,
            sitioMasVisitado: resp.sitioMasVisitado,
            hotelMasReservado: resp.hotelMasReservado,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
