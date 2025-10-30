package com.opticamiroo.projectbackend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.opticamiroo.projectbackend.entities.Venta;
import com.opticamiroo.projectbackend.services.VentaServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/Ventas")
public class VentaRestControllers {

    @Autowired
    private VentaServices VentaServices;

    @PostMapping
    public ResponseEntity<Venta> crear(@RequestBody Venta Venta) {
        return ResponseEntity.ok(VentaServices.crear(Venta));
    }

    @GetMapping
    public ResponseEntity<List<Venta>> listar() {
        return ResponseEntity.ok(VentaServices.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venta> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(VentaServices.obtenerId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Venta> actualizar(@PathVariable Long id, @RequestBody Venta Venta) {
        return ResponseEntity.ok(VentaServices.actualizar(id, Venta));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        VentaServices.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
