package com.opticamiroo.projectbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.opticamiroo.projectbackend.entities.*;
import com.opticamiroo.projectbackend.services.*;

import java.util.List;

@RestController
@RequestMapping("/api/boletas")
@CrossOrigin(origins = "http://localhost:5173")
public class BoletaRestController {

    @Autowired
    private BoletaServices boletaService;

    @Autowired
    private ClienteServices clienteService;

    @PostMapping("/generar")
    public Boleta generarBoleta(@RequestParam Long clienteId,
                                @RequestBody List<BoletaDetalle> detalles) {

        Cliente cliente = clienteService.obtenerId(clienteId);

        return boletaService.generarBoleta(cliente, detalles);
    }

    @GetMapping("/cliente/{clienteId}")
    public List<Boleta> historial(@PathVariable Long clienteId) {
        return boletaService.obtenerBoletasPorCliente(clienteId);
    }
}
