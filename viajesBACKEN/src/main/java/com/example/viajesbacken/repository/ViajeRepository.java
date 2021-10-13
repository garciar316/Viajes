package com.example.viajesbacken.repository;

import com.example.viajesbacken.entity.Ciudad;
import com.example.viajesbacken.entity.Turista;
import com.example.viajesbacken.entity.Viaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ViajeRepository extends JpaRepository<Viaje, Long> {
    List<Viaje> findAllByTurista(Turista turista);
    List<Viaje> findAllByCiudad(Ciudad ciudad);
    List<Viaje> findAllByFechaAndAndCiudad(Date fecha, Ciudad ciudad);
}
