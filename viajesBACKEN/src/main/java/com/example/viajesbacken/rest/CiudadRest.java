package com.example.viajesbacken.rest;

import com.example.viajesbacken.entity.Ciudad;
import com.example.viajesbacken.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("ciudades")
public class CiudadRest {
    @Autowired
    private CiudadService ciudadService;

    @GetMapping
    public List<Ciudad> getAll(){
        return ciudadService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        Optional<Ciudad> turistaOptional = ciudadService.findById(id);
        if(!turistaOptional.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(turistaOptional);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Ciudad ciudad){
        return ResponseEntity.status(HttpStatus.CREATED).body(ciudadService.save(ciudad));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<Ciudad> ciudad = ciudadService.findById(id);
        if (!ciudad.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        ciudadService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@RequestBody Ciudad ciudadDetalle, @PathVariable Long id){
        Optional<Ciudad> ciudad = ciudadService.findById(id);

        if (!ciudad.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        ciudad.get().setNombre(ciudadDetalle.getNombre());
        ciudad.get().setCantHabitantes(ciudadDetalle.getCantHabitantes());
        ciudad.get().setSitioMasVisitado(ciudadDetalle.getSitioMasVisitado());
        ciudad.get().setHotelMasReservado(ciudadDetalle.getHotelMasReservado());

        return ResponseEntity.status(HttpStatus.CREATED).body(ciudadService.save(ciudad.get()));
    }

}