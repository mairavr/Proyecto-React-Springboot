package com.opticamiroo.projectbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.opticamiroo.projectbackend.entities.NumeracionBoleta;
import com.opticamiroo.projectbackend.repositories.NumeracionBoletaRepositories;

@Service
public class NumeracionServicesImpl implements NumeracionServices {

    @Autowired
    private NumeracionBoletaRepositories repo;

    @Override
    @Transactional
    public Long obtenerNumeroCorrelativo() {

        
        NumeracionBoleta n = repo.bloquearRegistro(1L);

        Long siguiente = n.getUltimoNumero() + 1;
        n.setUltimoNumero(siguiente);

        repo.save(n);

        return siguiente;
    }
}
