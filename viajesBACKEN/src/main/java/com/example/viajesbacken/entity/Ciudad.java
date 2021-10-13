package com.example.viajesbacken.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "ciudades")
public class Ciudad implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;

    @Column(name = "cant_habitantes", nullable = false)
    private int cantHabitantes;

    @Column(name = "sitio_mas_visitado", length = 50, nullable = false)
    private String sitioMasVisitado;

    @Column(name = "hotel_mas_reservado", length = 50, nullable = false)
    private String hotelMasReservado;


}
