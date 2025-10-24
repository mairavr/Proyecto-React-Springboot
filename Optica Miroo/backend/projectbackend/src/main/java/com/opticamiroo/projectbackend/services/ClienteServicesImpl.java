package com.opticamiroo.projectbackend.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opticamiroo.projectbackend.entities.Cliente;
import com.opticamiroo.projectbackend.repositories.ClienteRepositories;

@Service
public class ClienteServicesImpl implements ClienteServices {

    @Autowired
    private ClienteRepositories clienteRepositories;

    @Override
    public Cliente crear(Cliente Cliente) {
        return clienteRepositories.save(Cliente);
    }

    @Override
    public Cliente obtenerId(Long id) {
        return clienteRepositories.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente no encontrado"));
    }

    @Override
    public List<Cliente> listarTodos() {
        return (List<Cliente>) clienteRepositories.findAll();
    }

    @Override
    public void eliminar(Long id) {
        if (!clienteRepositories.existsById(id)) {
            throw new RuntimeException("Cliente no encontrado");
        }
        clienteRepositories.deleteById(id);
    }

    @Override
    public Cliente actualizar(Long id, Cliente clienteActualizado) {
        Cliente existente = obtenerId(id);

        if (clienteActualizado.getNombre() != null) {
            existente.setNombre(clienteActualizado.getNombre());
        }
        if (clienteActualizado.getCorreo() != null) {
            existente.setCorreo(clienteActualizado.getCorreo());
        }
        if (clienteActualizado.getTelefono() != null) {
            existente.setTelefono(clienteActualizado.getTelefono());
        }

        return clienteRepositories.save(existente);
    }
}
