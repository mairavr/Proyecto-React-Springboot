package com.opticamiroo.projectbackend.security;

import com.opticamiroo.projectbackend.entities.Cliente;
import com.opticamiroo.projectbackend.repositories.ClienteRepositories;
import org.springframework.security.core.userdetails.*;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
public class CustomClienteDetailsService implements UserDetailsService {

    private final ClienteRepositories clienteRepo;

    public CustomClienteDetailsService(ClienteRepositories clienteRepo) {
        this.clienteRepo = clienteRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
        Cliente cliente = clienteRepo.findByCorreo(correo)
                .orElseThrow(() -> new UsernameNotFoundException("Cliente no encontrado: " + correo));

        var authorities = List.of(new SimpleGrantedAuthority("ROLE_CLIENTE"));

        return new org.springframework.security.core.userdetails.User(
                cliente.getCorreo(),       
                cliente.getContrasena(),   
                true,                     
                true,                  
                true,                   
                true,                   
                authorities
        );
    }
}
