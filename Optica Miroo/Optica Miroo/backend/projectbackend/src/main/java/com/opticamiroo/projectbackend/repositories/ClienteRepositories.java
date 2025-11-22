package com.opticamiroo.projectbackend.repositories;

import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

import com.opticamiroo.projectbackend.entities.Cliente;

public interface ClienteRepositories extends CrudRepository<Cliente, Long> { 
    Optional<Cliente> findByCorreo(String correo);
}
