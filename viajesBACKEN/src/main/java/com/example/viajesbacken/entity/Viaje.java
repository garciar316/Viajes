package com.example.viajesbacken.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@Table(name = "viajes")
public class Viaje implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fecha", nullable = false)
    private Date fecha;

    @Column(name = "presupuesto", nullable = false)
    private double presupuesto;

    @Column(name = "tarjeta_credito", nullable = false)
    private boolean tarjetaCredito;

    @ManyToOne
    @JoinColumn(name = "id_ciudad")
    private Ciudad ciudad;

    @ManyToOne
    @JoinColumn(name = "id_turista")
    private Turista turista;
}
