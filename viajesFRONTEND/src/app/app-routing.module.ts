import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { DetalleViajeComponent } from './components/detalle-viaje/detalle-viaje.component';
import { FormCiudadComponent } from './components/form-ciudad/form-ciudad.component';
import { FormTuristaComponent } from './components/form-turista/form-turista.component';
import { FormViajeComponent } from './components/form-viaje/form-viaje.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TuristasComponent } from './components/turistas/turistas.component';
import { ViajesComponent } from './components/viajes/viajes.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'turistas', component: TuristasComponent },
  { path: 'turistas/editar/:id', component: FormTuristaComponent },
  { path: 'turistas/crear', component: FormTuristaComponent },
  { path: 'ciudades', component: CiudadesComponent },
  { path: 'ciudades/editar/:id', component: FormCiudadComponent },
  { path: 'ciudades/crear', component: FormCiudadComponent },
  { path: 'viajes', component: ViajesComponent },
  { path: 'viajes/crear', component: FormViajeComponent },
  { path: 'viajes/editar/:id', component: FormViajeComponent },
  { path: 'viajes/detalle/:id', component: DetalleViajeComponent },
  { path: 'viajes/:destino/:id', component: ViajesComponent },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
