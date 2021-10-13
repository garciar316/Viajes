package com.example.viajesbacken.service;

import com.example.viajesbacken.entity.Ciudad;
import com.example.viajesbacken.entity.Turista;
import com.example.viajesbacken.entity.Viaje;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ViajeService {
    List<Viaje> findAll();
    Optional<Viaje> findById(Long id);
    List<Viaje> findAllByTurista(Turista turista);
    List<Viaje> findAllByCiudad(Ciudad ciudad);
    List<Viaje> findAllByFechaAndCiudad(Date fecha, Ciudad ciudad);
    Viaje save(Viaje viaje);
    void deleteById(Long id);
}
