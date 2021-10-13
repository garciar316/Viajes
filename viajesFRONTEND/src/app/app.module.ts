import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuristasComponent } from './components/turistas/turistas.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ViajesComponent } from './components/viajes/viajes.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormTuristaComponent } from './components/form-turista/form-turista.component';
import { FormCiudadComponent } from './components/form-ciudad/form-ciudad.component';
import { FormViajeComponent } from './components/form-viaje/form-viaje.component';
import { DetalleViajeComponent } from './components/detalle-viaje/detalle-viaje.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    TuristasComponent,
    CiudadesComponent,
    ViajesComponent,
    HeaderComponent,
    FooterComponent,
    FormTuristaComponent,
    FormCiudadComponent,
    FormViajeComponent,
    DetalleViajeComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
