package com.opticamiroo.projectbackend.services;

import java.util.List;

import com.opticamiroo.projectbackend.entities.Venta;

public interface VentaServices {
    Venta crear(Venta venta);
    Venta obtenerId(Long id);
    List<Venta> listarTodas();
    void eliminar(Long id);
    Venta actualizar(Long id, Venta ventaActualizada);
}
