package com.example.viajesbacken.rest;

import com.example.viajesbacken.entity.Turista;
import com.example.viajesbacken.service.TuristaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("turistas")
public class TuristaRest {
    @Autowired
    private TuristaService turistaService;

    @GetMapping
    public List<Turista> getAll(){
        return turistaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable String id){
        Optional<Turista> turistaOptional = turistaService.findById(id);
        if(!turistaOptional.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(turistaOptional);
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Turista turista){
        return ResponseEntity.status(HttpStatus.CREATED).body(turistaService.save(turista));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable String id){
        Optional<Turista> turista = turistaService.findById(id);
        if (!turista.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        turistaService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@RequestBody Turista turistaDetalle, @PathVariable String id){
        Optional<Turista> turista = turistaService.findById(id);

        if (!turista.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        turista.get().setNombre(turistaDetalle.getNombre());
        turista.get().setFechaNacimiento(turistaDetalle.getFechaNacimiento());
        turista.get().setTipoId(turistaDetalle.getTipoId());
        turista.get().setFrecuencia(turistaDetalle.getFrecuencia());

        return ResponseEntity.status(HttpStatus.CREATED).body(turistaService.save(turista.get()));
    }

}
