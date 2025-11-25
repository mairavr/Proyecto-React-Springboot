package com.opticamiroo.projectbackend.repositories;

import com.opticamiroo.projectbackend.entities.NumeracionBoleta;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import jakarta.persistence.LockModeType;

public interface NumeracionBoletaRepositories extends JpaRepository<NumeracionBoleta, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT n FROM NumeracionBoleta n WHERE n.id = :id")
    NumeracionBoleta bloquearRegistro(@Param("id") Long id);
}
