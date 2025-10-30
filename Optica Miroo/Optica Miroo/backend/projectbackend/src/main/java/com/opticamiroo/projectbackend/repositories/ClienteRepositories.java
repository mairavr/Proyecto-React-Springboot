package com.opticamiroo.projectbackend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.opticamiroo.projectbackend.entities.Cliente;

public interface ClienteRepositories extends CrudRepository<Cliente, Long> { 

}
