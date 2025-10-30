package com.opticamiroo.projectbackend.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opticamiroo.projectbackend.entities.Proveedor;
import com.opticamiroo.projectbackend.repositories.ProveedorRepositories;

@Service
public class ProveedorServicesImpl implements ProveedorServices {

    @Autowired
    private ProveedorRepositories proveedorRepositories;

    @Override
    public Proveedor crear(Proveedor Proveedor) {
        return proveedorRepositories.save(Proveedor);
    }

    @Override
    public Proveedor obtenerId(Long id) {
        return proveedorRepositories.findById(id)
                .orElseThrow(() -> new RuntimeException("Proveedor no encontrado"));
    }

    @Override
    public List<Proveedor> listarTodos() {
        return (List<Proveedor>) proveedorRepositories.findAll();
    }

    @Override
    public void eliminar(Long id) {
        if (!proveedorRepositories.existsById(id)) {
            throw new RuntimeException("Proveedor no encontrado");
        }
        proveedorRepositories.deleteById(id);
    }

    @Override
    public Proveedor actualizar(Long id, Proveedor proveedorActualizado) {
        Proveedor existente = obtenerId(id);

        if (proveedorActualizado.getNombre() != null) {
            existente.setNombre(proveedorActualizado.getNombre());
        }
        if (proveedorActualizado.getTelefono() != null) {
            existente.setTelefono(proveedorActualizado.getTelefono());
        }
        if (proveedorActualizado.getEmail() != null) {
            existente.setEmail(proveedorActualizado.getEmail());
        }

        return proveedorRepositories.save(existente);
    }
}
