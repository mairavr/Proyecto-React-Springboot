package com.opticamiroo.projectbackend.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.opticamiroo.projectbackend.entities.Venta;
import com.opticamiroo.projectbackend.repositories.VentaRepositories;

@Service
public class VentaServicesImpl implements VentaServices {

    @Autowired
    private VentaRepositories ventaRepositories; 

    @Override
    public Venta crear(Venta venta) {
        return ventaRepositories.save(venta);
    }

    @Override
    public Venta obtenerId(Long id) {
        return ventaRepositories.findById(id)
                .orElseThrow(() -> new RuntimeException("Venta no encontrada"));
    }

    @Override
    public List<Venta> listarTodas() {
        return (List<Venta>) ventaRepositories.findAll();
    }

    @Override
    public void eliminar(Long id) {
        if (!ventaRepositories.existsById(id)) {
            throw new RuntimeException("Venta no encontrada");
        }
        ventaRepositories.deleteById(id);
    }

    @Override
    public Venta actualizar(Long id, Venta ventaActualizada) {
        Venta existente = obtenerId(id);

        if (ventaActualizada.getFecha() != null) {
            existente.setFecha(ventaActualizada.getFecha());
        }
        if (ventaActualizada.getTotal() != null) {
            existente.setTotal(ventaActualizada.getTotal());
        }
        if (ventaActualizada.getCliente() != null) {
            existente.setCliente(ventaActualizada.getCliente());
        }

        return ventaRepositories.save(existente);
    }
}

