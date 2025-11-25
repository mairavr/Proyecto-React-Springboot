package com.opticamiroo.projectbackend.services;

import com.opticamiroo.projectbackend.entities.Boleta;
import com.opticamiroo.projectbackend.entities.Cliente;
import com.opticamiroo.projectbackend.entities.BoletaDetalle;

import java.util.List;

public interface BoletaServices {
    Boleta generarBoleta(Cliente cliente, List<BoletaDetalle> detalles);
    List<Boleta> obtenerBoletasPorCliente(Long clienteId);
}
