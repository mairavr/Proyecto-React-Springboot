package com.opticamiroo.projectbackend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.opticamiroo.projectbackend.entities.Proveedor;
import com.opticamiroo.projectbackend.services.ProveedorServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/Proveedors")
public class ProveedorRestControllers {

    @Autowired
    private ProveedorServices ProveedorServices;

    @PostMapping
    public ResponseEntity<Proveedor> crear(@RequestBody Proveedor Proveedor) {
        return ResponseEntity.ok(ProveedorServices.crear(Proveedor));
    }

    @GetMapping
    public ResponseEntity<List<Proveedor>> listar() {
        return ResponseEntity.ok(ProveedorServices.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(ProveedorServices.obtenerId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Proveedor> actualizar(@PathVariable Long id, @RequestBody Proveedor Proveedor) {
        return ResponseEntity.ok(ProveedorServices.actualizar(id, Proveedor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        ProveedorServices.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
