package com.example.viajesbacken.service;

import com.example.viajesbacken.entity.Ciudad;

import java.util.List;
import java.util.Optional;

public interface CiudadService {
    Optional<Ciudad> findById(Long id);
    List<Ciudad> findAll();
    Ciudad save(Ciudad ciudad);
    void deleteById(Long id);
}
