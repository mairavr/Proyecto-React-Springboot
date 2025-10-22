package com.opticamiroo.projectbackend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.opticamiroo.projectbackend.entities.Empleado;

public interface EmpleadoRepositories extends CrudRepository<Empleado, Long> { 

}