package com.opticamiroo.projectbackend.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // Crear producto
    @PostMapping
    public ResponseEntity<Map<String, Object>> crearProducto(@RequestBody Producto producto) {
        Categoria categoria = null;
        if (producto.getCategoria() != null && producto.getCategoria().getId() != null) {
            categoria = categoriaRepositories.findById(producto.getCategoria().getId())
                    .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
            producto.setCategoria(categoria);
        }

        Producto guardado = productoRepositories.save(producto);

        Map<String, Object> respuesta = new HashMap<>();
        respuesta.put("id", guardado.getId());
        respuesta.put("nombre", guardado.getNombre());
        respuesta.put("descripcion", guardado.getDescripcion());
        respuesta.put("precio", guardado.getPrecio());
        respuesta.put("imagen", guardado.getImagen());
        respuesta.put("activo", guardado.getActivo());
        respuesta.put("categoria", (guardado.getCategoria() != null) ? guardado.getCategoria().getNombre() : null);

        return ResponseEntity.status(201).body(respuesta);
    }

    // Listar todos los productos (limpio para React)
    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> listarProductos() {
        List<Producto> productos = productoServices.listarTodos();

        List<Map<String, Object>> lista = productos.stream().map(p -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", p.getId());
            map.put("nombre", p.getNombre());
            map.put("descripcion", p.getDescripcion());
            map.put("precio", p.getPrecio());
            map.put("imagen", p.getImagen());
            map.put("activo", p.getActivo());
            map.put("categoria", (p.getCategoria() != null) ? p.getCategoria().getNombre() : null);
            return map;
        }).toList();

        return ResponseEntity.ok(lista);
    }

    // Obtener producto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> obtenerProductoPorId(@PathVariable Long id) {
        Producto p = productoServices.obtenerId(id);
        Map<String, Object> map = new HashMap<>();
        map.put("id", p.getId());
        map.put("nombre", p.getNombre());
        map.put("descripcion", p.getDescripcion());
        map.put("precio", p.getPrecio());
        map.put("imagen", p.getImagen());
        map.put("activo", p.getActivo());
        map.put("categoria", (p.getCategoria() != null) ? p.getCategoria().getNombre() : null);
        return ResponseEntity.ok(map);
    }

    // Actualizar producto
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> actualizarProducto(@PathVariable Long id, @RequestBody Producto productoActualizado) {
        Producto p = productoServices.actualizar(id, productoActualizado);

        Map<String, Object> map = new HashMap<>();
        map.put("id", p.getId());
        map.put("nombre", p.getNombre());
        map.put("descripcion", p.getDescripcion());
        map.put("precio", p.getPrecio());
        map.put("imagen", p.getImagen());
        map.put("activo", p.getActivo());
        map.put("categoria", (p.getCategoria() != null) ? p.getCategoria().getNombre() : null);

        return ResponseEntity.ok(map);
    }

    // Eliminar producto
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        productoServices.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // Desactivar producto
    @PatchMapping("/{id}/desactivar")
    public ResponseEntity<Map<String, Object>> desactivarProducto(@PathVariable Long id) {
        Producto p = productoServices.desactivar(id);
        Map<String, Object> map = new HashMap<>();
        map.put("id", p.getId());
        map.put("nombre", p.getNombre());
        map.put("descripcion", p.getDescripcion());
        map.put("precio", p.getPrecio());
        map.put("imagen", p.getImagen());
        map.put("activo", p.getActivo());
        map.put("categoria", (p.getCategoria() != null) ? p.getCategoria().getNombre() : null);
        return ResponseEntity.ok(map);
    }

}
