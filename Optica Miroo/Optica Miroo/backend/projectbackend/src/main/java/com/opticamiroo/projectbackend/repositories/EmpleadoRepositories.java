package com.opticamiroo.projectbackend.repositories;

import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

import com.opticamiroo.projectbackend.entities.Empleado;

public interface EmpleadoRepositories extends CrudRepository<Empleado, Long> { 
    Optional<Empleado> findByCorreo(String correo);
}