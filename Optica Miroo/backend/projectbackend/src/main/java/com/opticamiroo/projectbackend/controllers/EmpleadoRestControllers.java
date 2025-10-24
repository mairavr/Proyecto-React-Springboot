package com.opticamiroo.projectbackend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.opticamiroo.projectbackend.entities.Empleado;
import com.opticamiroo.projectbackend.services.EmpleadoServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/Empleados")
public class EmpleadoRestControllers {

    @Autowired
    private EmpleadoServices EmpleadoServices;

    @PostMapping
    public ResponseEntity<Empleado> crear(@RequestBody Empleado Empleado) {
        return ResponseEntity.ok(EmpleadoServices.crear(Empleado));
    }

    @GetMapping
    public ResponseEntity<List<Empleado>> listar() {
        return ResponseEntity.ok(EmpleadoServices.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleado> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(EmpleadoServices.obtenerId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empleado> actualizar(@PathVariable Long id, @RequestBody Empleado Empleado) {
        return ResponseEntity.ok(EmpleadoServices.actualizar(id, Empleado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        EmpleadoServices.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
