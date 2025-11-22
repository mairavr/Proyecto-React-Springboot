package com.opticamiroo.projectbackend.security;

import com.opticamiroo.projectbackend.entities.Empleado;
import com.opticamiroo.projectbackend.repositories.EmpleadoRepositories;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomEmpleadoDetailsService implements UserDetailsService {

    private final EmpleadoRepositories empleadoRepo;

    public CustomEmpleadoDetailsService(EmpleadoRepositories empleadoRepo) {
        this.empleadoRepo = empleadoRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
        Empleado empleado = empleadoRepo.findByCorreo(correo)
                .orElseThrow(() -> new UsernameNotFoundException("Empleado no encontrado: " + correo));

        var authorities = List.of(new SimpleGrantedAuthority("ROLE_" + empleado.getCargo().toUpperCase()));

        return new org.springframework.security.core.userdetails.User(
                empleado.getCorreo(),      
                empleado.getContrasena(),  
                true,                     
                true,                   
                true,                      
                true,                    
                authorities
        );
    }
}
