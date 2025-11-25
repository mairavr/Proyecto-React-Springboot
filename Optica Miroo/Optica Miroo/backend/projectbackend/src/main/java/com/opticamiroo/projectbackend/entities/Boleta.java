package com.opticamiroo.projectbackend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Boleta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long numeroBoleta;

    private LocalDateTime fechaEmision;

    private Double subtotal;

    private Double iva;

    private Double total;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @OneToMany(mappedBy = "boleta", cascade = CascadeType.ALL)
    private List<BoletaDetalle> detalles;
}
