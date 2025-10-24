package com.opticamiroo.projectbackend.services;

import java.util.List;

import com.opticamiroo.projectbackend.entities.Proveedor;

public interface ProveedorServices {
    Proveedor crear(Proveedor proveedor);
    Proveedor obtenerId(Long id);
    List<Proveedor> listarTodos();
    void eliminar(Long id);
    Proveedor actualizar(Long id, Proveedor proveedorActualizado);
}
