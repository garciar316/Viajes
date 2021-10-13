package com.example.viajesbacken.service;

import com.example.viajesbacken.entity.Turista;
import com.example.viajesbacken.repository.TuristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TuristaServiceImpl implements TuristaService{
    @Autowired
    private TuristaRepository turistaRepository;

    @Override
    @Transactional(readOnly = true)
    public Optional<Turista> findById(String id) {
        return turistaRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Turista> findAll() {
        return turistaRepository.findAll();
    }

    @Override
    @Transactional
    public Turista save(Turista turista) {
        return turistaRepository.save(turista);
    }

    @Override
    @Transactional
    public void deleteById(String id) {
        turistaRepository.deleteById(id);
    }
}
