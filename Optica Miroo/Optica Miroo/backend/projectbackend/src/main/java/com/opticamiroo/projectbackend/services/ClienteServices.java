package com.opticamiroo.projectbackend.services;

import java.util.List;

import com.opticamiroo.projectbackend.entities.Cliente;

public interface ClienteServices {
    Cliente crear(Cliente cliente);
    Cliente obtenerId(Long id);
    List<Cliente> listarTodos();
    void eliminar(Long id);
    Cliente actualizar(Long id, Cliente clienteActualizado);
}
