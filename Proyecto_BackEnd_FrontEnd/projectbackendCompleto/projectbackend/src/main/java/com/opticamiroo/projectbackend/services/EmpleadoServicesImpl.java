package com.opticamiroo.projectbackend.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.opticamiroo.projectbackend.entities.Empleado;
import com.opticamiroo.projectbackend.repositories.EmpleadoRepositories;

@Service
public class EmpleadoServicesImpl implements EmpleadoServices {

    @Autowired
    private EmpleadoRepositories empleadoRepositories;

    @Override
    public Empleado crear(Empleado Empleado) {
        return empleadoRepositories.save(Empleado);
    }

    @Override
    public Empleado obtenerId(Long id) {
        return empleadoRepositories.findById(id)
                .orElseThrow(() -> new RuntimeException("Empleado no encontrado"));
    }

    @Override
    public List<Empleado> listarTodos() {
        return (List<Empleado>) empleadoRepositories.findAll();
    }

    @Override
    public void eliminar(Long id) {
        if (!empleadoRepositories.existsById(id)) {
            throw new RuntimeException("Empleado no encontrado");
        }
        empleadoRepositories.deleteById(id);
    }

    @Override
    public Empleado actualizar(Long id, Empleado empleadoActualizado) {
        Empleado existente = obtenerId(id);

        if (empleadoActualizado.getNombre() != null) {
            existente.setNombre(empleadoActualizado.getNombre());
        }
        if (empleadoActualizado.getCargo() != null) {
            existente.setCargo(empleadoActualizado.getCargo());
        }
        if (empleadoActualizado.getCorreo() != null) {
            existente.setCorreo(empleadoActualizado.getCorreo());
        }

        return empleadoRepositories.save(existente);
    }
}
