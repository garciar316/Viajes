package com.example.viajesbacken.service;

import com.example.viajesbacken.entity.Ciudad;
import com.example.viajesbacken.entity.Turista;
import com.example.viajesbacken.entity.Viaje;
import com.example.viajesbacken.repository.ViajeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ViajeServiceImpl implements ViajeService{
    @Autowired
    private ViajeRepository viajeRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Viaje> findAll() {
        return viajeRepository.findAll();
    }

    @Override
    public Optional<Viaje> findById(Long id) {
        return viajeRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Viaje> findAllByTurista(Turista turista) {
        return viajeRepository.findAllByTurista(turista);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Viaje> findAllByCiudad(Ciudad ciudad) {
        return viajeRepository.findAllByCiudad(ciudad);
    }

    @Override
    public List<Viaje> findAllByFechaAndCiudad(Date fecha, Ciudad ciudad) {
        return viajeRepository.findAllByFechaAndAndCiudad(fecha, ciudad);
    }

    @Override
    @Transactional
    public Viaje save(Viaje viaje) {
        return viajeRepository.save(viaje);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        viajeRepository.deleteById(id);
    }


}
