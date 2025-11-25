package com.opticamiroo.projectbackend.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoletaDetalle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long productoId;
    private String nombreProducto;

    private Integer cantidad;
    private Double precioUnitario;
    private Double totalLinea;

    @ManyToOne
    @JoinColumn(name = "boleta_id")
    private Boleta boleta;
}