package com.example.viajesbacken.service;

import com.example.viajesbacken.entity.Turista;

import java.util.List;
import java.util.Optional;

public interface TuristaService {
    Optional<Turista> findById(String id);
    List<Turista> findAll();
    Turista save(Turista turista);
    void deleteById(String id);
}
