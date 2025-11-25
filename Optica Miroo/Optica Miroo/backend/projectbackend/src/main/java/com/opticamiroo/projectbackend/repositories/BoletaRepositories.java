package com.opticamiroo.projectbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.opticamiroo.projectbackend.entities.Boleta;

public interface BoletaRepositories extends JpaRepository<Boleta, Long> {
}
