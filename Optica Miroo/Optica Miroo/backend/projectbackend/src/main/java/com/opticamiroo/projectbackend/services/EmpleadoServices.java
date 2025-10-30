package com.opticamiroo.projectbackend.services;

import java.util.List;

import com.opticamiroo.projectbackend.entities.Empleado;

public interface EmpleadoServices {
    Empleado crear(Empleado empleado);
    Empleado obtenerId(Long id);
    List<Empleado> listarTodos();
    void eliminar(Long id);
    Empleado actualizar(Long id, Empleado empleadoActualizado);
}

