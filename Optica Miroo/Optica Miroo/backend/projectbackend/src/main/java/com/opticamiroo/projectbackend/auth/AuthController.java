package com.opticamiroo.projectbackend.auth;

import com.opticamiroo.projectbackend.security.JwtUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtUtils jwtUtils;

    public AuthController(AuthenticationManager authManager,
                          JwtUtils jwtUtils) {
        this.authManager = authManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody AuthRequest req) {
    try {
        // autentica con correo y contraseña
        Authentication authentication = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(req.username(), req.password())
        );

        // si llega aquí, credenciales válidas
        UserDetails user = (UserDetails) authentication.getPrincipal();

        // convierte roles a lista de strings
        List<String> roles = user.getAuthorities().stream()
            .map(a -> a.getAuthority())
            .toList();

        // genera token con roles
        Map<String, Object> claims = Map.of("roles", roles);
        String token = jwtUtils.generateToken(user.getUsername(), claims);

        return ResponseEntity.ok(new AuthResponse(token));
    } catch (BadCredentialsException e) {
        return ResponseEntity.status(401).body("Credenciales inválidas");
    } catch (Exception e) {
        e.printStackTrace(); // imprime el error real en consola
        return ResponseEntity.status(500).body("Error interno en login: " + e.getMessage());
    }
}
}
