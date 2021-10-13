package com.example.viajesbacken.rest;

import com.example.viajesbacken.entity.Ciudad;
import com.example.viajesbacken.entity.Turista;
import com.example.viajesbacken.entity.Viaje;
import com.example.viajesbacken.service.CiudadService;
import com.example.viajesbacken.service.TuristaService;
import com.example.viajesbacken.service.ViajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("viajes")
public class ViajeRest {
    @Autowired
    private ViajeService viajeService;

    @Autowired
    private TuristaService turistaService;

    @Autowired
    private CiudadService ciudadService;

    @GetMapping
    public List<Viaje> getAll(){
        return viajeService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        Optional<Viaje> viajeOptional = viajeService.findById(id);
        if(!viajeOptional.isPresent()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(viajeOptional);
    }

    @GetMapping("/turista/{id}")
    public ResponseEntity<List<Viaje>> getAllByTurista(@PathVariable (value = "id") String idTurista){
        Optional<Turista> turista = turistaService.findById(idTurista);

        if(!turista.isPresent()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(viajeService.findAllByTurista(turista.get()));
    }

    @GetMapping("/ciudad/{id}")
    public ResponseEntity<List<Viaje>> getAllByCiudad(@PathVariable (value = "id") Long idCiudad){
        Optional<Ciudad> ciudad = ciudadService.findById(idCiudad);

        if(!ciudad.isPresent()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(viajeService.findAllByCiudad(ciudad.get()));
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Viaje viaje){
        if(viajeService.findAllByFechaAndCiudad(viaje.getFecha(), viaje.getCiudad()).size() >= 5){
            return ResponseEntity.status(HttpStatus.LOCKED).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(viajeService.save(viaje));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<Viaje> viaje = viajeService.findById(id);
        if(!viaje.isPresent()){
            return ResponseEntity.notFound().build();
        }
        viajeService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@RequestBody Viaje viajeDetalle, @PathVariable Long id){
        Optional<Viaje> viaje = viajeService.findById(id);

        if (!viaje.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        viaje.get().setCiudad(viajeDetalle.getCiudad());
        viaje.get().setTurista(viajeDetalle.getTurista());
        viaje.get().setPresupuesto(viajeDetalle.getPresupuesto());
        viaje.get().setTarjetaCredito(viajeDetalle.isTarjetaCredito());

        return ResponseEntity.status(HttpStatus.CREATED).body(viajeService.save(viaje.get()));
    }
}
