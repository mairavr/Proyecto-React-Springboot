package com.opticamiroo.projectbackend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.opticamiroo.projectbackend.entities.Cliente;
import com.opticamiroo.projectbackend.services.ClienteServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/Clientes")
public class ClienteRestControllers {

    @Autowired
    private ClienteServices ClienteServices;

    @PostMapping
    public ResponseEntity<Cliente> crear(@RequestBody Cliente Cliente) {
        return ResponseEntity.ok(ClienteServices.crear(Cliente));
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listar() {
        return ResponseEntity.ok(ClienteServices.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(ClienteServices.obtenerId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> actualizar(@PathVariable Long id, @RequestBody Cliente Cliente) {
        return ResponseEntity.ok(ClienteServices.actualizar(id, Cliente));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        ClienteServices.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
