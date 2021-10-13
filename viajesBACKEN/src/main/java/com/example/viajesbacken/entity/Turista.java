package com.example.viajesbacken.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@Table(name = "turistas")
public class Turista implements Serializable {
    @Id
    private String id;

    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;

    @Column(name = "tipo_id", length = 50, nullable = false)
    private String tipoId;

    @Column(name = "fecha_nacimiento", nullable = false)
    private Date fechaNacimiento;

    @Column(name = "frecuencia", nullable = false)
    private int frecuencia;
}
