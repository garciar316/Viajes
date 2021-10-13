package com.example.viajesbacken.repository;

import com.example.viajesbacken.entity.Turista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TuristaRepository extends JpaRepository<Turista, String> {
}
