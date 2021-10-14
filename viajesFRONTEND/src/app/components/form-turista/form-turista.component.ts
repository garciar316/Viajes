import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TuristaService } from 'src/app/services/turista.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-turista',
  templateUrl: './form-turista.component.html',
  styleUrls: ['./form-turista.component.css'],
})
export class FormTuristaComponent implements OnInit {
  turistaForm!: FormGroup;
  idTurista: any;
  mensajes = { guardado: false, editar: false, error: false };
  constructor(
    private formBuilder: FormBuilder,
    private turistaService: TuristaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.turistaForm = this.formBuilder.group({
      id: ['', Validators.required],
      tipoId: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      frecuencia: ['', Validators.required],
    });
    this.cargarDatos();
  }
  validar(form: any): void {
    this.mensajes.guardado = false;
    this.mensajes.error = false;
    this.turistaService.getById(form.value.id).subscribe(
      (resp) => {
        if (Object.keys(resp).length != 0 && !this.mensajes.editar) {
          this.mensajes.error = true;
        } else {
          this.guardar();
        }
      },
      (error) => {
        error.status == 404 ? this.guardar() : console.error(error);
      }
    );
  }
  cargarDatos(): void {
    this.idTurista = this.route.snapshot.paramMap.get('id');
    if (this.idTurista) {
      this.turistaService.getById(this.idTurista).subscribe(
        (resp) => {
          this.mensajes.editar = true;
          this.turistaForm.setValue({
            id: resp.id,
            tipoId: resp.tipoId,
            nombre: resp.nombre,
            fechaNacimiento: resp.fechaNacimiento,
            frecuencia: resp.frecuencia,
          });
        },
        (error) => {
          console.error(error);
          this.router.navigate(['inicio']);
        }
      );
    }
  }
  guardar() {
    this.turistaService.save(this.turistaForm.value).subscribe(
      (resp) => {
        this.turistaForm.reset();
        this.mensajes.guardado = true;
      },
      (_error) => {
        console.error(_error);
      }
    );
  }
}
