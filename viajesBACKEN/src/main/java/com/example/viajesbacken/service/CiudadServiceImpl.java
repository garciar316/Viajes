package com.example.viajesbacken.service;

import com.example.viajesbacken.entity.Ciudad;
import com.example.viajesbacken.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CiudadServiceImpl implements CiudadService{
    @Autowired
    private CiudadRepository ciudadRepository;

    @Override
    @Transactional(readOnly = true)
    public Optional<Ciudad> findById(Long id) {
        return ciudadRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Ciudad> findAll() {
        return ciudadRepository.findAll();
    }

    @Override
    @Transactional
    public Ciudad save(Ciudad ciudad) {
        return ciudadRepository.save(ciudad);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        ciudadRepository.deleteById(id);
    }
}
