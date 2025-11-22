package com.opticamiroo.projectbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.opticamiroo.projectbackend.entities.Categoria;
import com.opticamiroo.projectbackend.entities.Producto;
import com.opticamiroo.projectbackend.repositories.CategoriaRepositories;
import com.opticamiroo.projectbackend.repositories.ProductoRepositories;
import com.opticamiroo.projectbackend.services.ProductoServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/productos")
public class ProductoRestControllers {

    @Autowired
    private ProductoServices productoServices;

    @Autowired
    private CategoriaRepositories categoriaRepositories;

    @Autowired
    private ProductoRepositories productoRepositories;

@PostMapping
public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {

    Categoria categoriaInput = producto.getCategoria();
    Long categoriaId = (categoriaInput != null) ? categoriaInput.getId() : null;

    if (categoriaId != null) {
        Categoria categoria = categoriaRepositories.findById(categoriaId)
            .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
        producto.setCategoria(categoria);
    }

    Producto guardado = productoRepositories.save(producto);
    return ResponseEntity.status(HttpStatus.CREATED).body(guardado);
}

    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable Long id) {
        Producto producto = productoServices.obtenerId(id);
        return ResponseEntity.ok(producto);
    }

 
    @GetMapping
    public ResponseEntity<List<Producto>> listarProductos() {
        List<Producto> productos = productoServices.listarTodos();
        return ResponseEntity.ok(productos);
    }

  
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        productoServices.eliminar(id);
        return ResponseEntity.noContent().build();
    }

   
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto productoActualizado) {
        Producto producto = productoServices.actualizar(id, productoActualizado);
        return ResponseEntity.ok(producto);
    }


    
    @PatchMapping("/{id}/desactivar")
    public ResponseEntity<Producto> desactivar(@PathVariable Long id) {
        return ResponseEntity.ok(productoServices.desactivar(id));
    }

}
