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
  sw: boolean = false;
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
    this.editar();
  }
  guardar(): void {
    this.sw = false;
    this.turistaService.save(this.turistaForm.value).subscribe(
      (resp) => {
        this.turistaForm.reset();
        this.sw = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  editar(): void {
    this.idTurista = this.route.snapshot.paramMap.get('id');
    if (this.idTurista) {
      this.turistaService.getById(this.idTurista).subscribe(
        (resp) => {
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
        }
      );
    }
  }
}
