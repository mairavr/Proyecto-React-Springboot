package com.opticamiroo.projectbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.opticamiroo.projectbackend.entities.*;
import com.opticamiroo.projectbackend.repositories.*;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class BoletaServicesImpl implements BoletaServices {

    @Autowired
    private BoletaRepositories boletaRepo;

    @Autowired
    private BoletaDetalleRepositories detalleRepo;

    @Autowired
    private NumeracionServices numeracionService;

    @Override
    @Transactional
    public Boleta generarBoleta(Cliente cliente, List<BoletaDetalle> detalles) {

        double subtotal = detalles.stream()
                .mapToDouble(d -> d.getTotalLinea())
                .sum();

        double iva = subtotal * 0.19;
        double total = subtotal + iva;

        Boleta boleta = new Boleta();
        boleta.setCliente(cliente);
        boleta.setFechaEmision(LocalDateTime.now());
        boleta.setNumeroBoleta(numeracionService.obtenerNumeroCorrelativo());
        boleta.setSubtotal(subtotal);
        boleta.setIva(iva);
        boleta.setTotal(total);

        Boleta boletaGuardada = boletaRepo.save(boleta);

        for (BoletaDetalle d : detalles) {
            d.setBoleta(boletaGuardada);
            detalleRepo.save(d);
        }

        return boletaGuardada;
    }

    @Override
    public List<Boleta> obtenerBoletasPorCliente(Long clienteId) {
        return boletaRepo.findAll()
                .stream()
                .filter(b -> b.getCliente().getId().equals(clienteId))
                .toList();
    }
}
