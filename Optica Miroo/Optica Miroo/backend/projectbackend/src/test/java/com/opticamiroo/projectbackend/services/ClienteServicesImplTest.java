package com.opticamiroo.projectbackend.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.opticamiroo.projectbackend.entities.Cliente;
import com.opticamiroo.projectbackend.repositories.ClienteRepositories;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
public class ClienteServicesImplTest {

    @Mock
    private ClienteRepositories clienteRepositories;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private ClienteServicesImpl clienteServices;

    private Cliente cliente1;
    private Cliente cliente2;

    @BeforeEach
    public void setup() {
        cliente1 = new Cliente();
        cliente1.setId(1L);
        cliente1.setNombre("Juan");
        cliente1.setCorreo("juan@example.com");
        cliente1.setTelefono("123456789");
        cliente1.setContrasena("secreta123");

        cliente2 = new Cliente();
        cliente2.setId(2L);
        cliente2.setNombre("Pedro");
        cliente2.setCorreo("pedro@example.com");
        cliente2.setTelefono("987654321");
        cliente2.setContrasena("clave456");
    }

    @Test
    public void crearCliente_debeHashearContraseña() {
        when(passwordEncoder.encode("secreta123")).thenReturn("HASHED_PASS");
        when(clienteRepositories.save(any(Cliente.class))).thenAnswer(inv -> inv.getArgument(0));

        Cliente nuevo = new Cliente();
        nuevo.setNombre("Pedro");
        nuevo.setCorreo("pedro@example.com");
        nuevo.setContrasena("secreta123");

        Cliente creado = clienteServices.crear(nuevo);

        assertNotNull(creado);
        assertEquals("HASHED_PASS", creado.getContrasena());
        verify(passwordEncoder, times(1)).encode("secreta123");
        verify(clienteRepositories, times(1)).save(any(Cliente.class));
    }

    @Test
    public void crearCliente_debeRetornarClienteGuardado() {
        when(clienteRepositories.save(any(Cliente.class))).thenAnswer(inv -> {
            Cliente c = inv.getArgument(0);
            c.setId(10L);
            return c;
        });

        Cliente nuevo = new Cliente();
        nuevo.setNombre("Pedro");
        nuevo.setCorreo("pedro@example.com");

        Cliente creado = clienteServices.crear(nuevo);

        assertNotNull(creado);
        assertEquals(10L, creado.getId());
        assertEquals("Pedro", creado.getNombre());
        verify(clienteRepositories, times(1)).save(any(Cliente.class));
    }

    @Test
    public void obtenerId_existente_debeRetornarCliente() {
        when(clienteRepositories.findById(1L)).thenReturn(Optional.of(cliente1));

        Cliente resultado = clienteServices.obtenerId(1L);

        assertNotNull(resultado);
        assertEquals("Juan", resultado.getNombre());
        verify(clienteRepositories, times(1)).findById(1L);
    }

    @Test
    public void obtenerId_noExistente_debeLanzarRuntimeException() {
        when(clienteRepositories.findById(99L)).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class, () -> clienteServices.obtenerId(99L));

        assertEquals("Cliente no encontrado", ex.getMessage());
        verify(clienteRepositories, times(1)).findById(99L);
    }

    @Test
    public void listarTodos_debeRetornarListaDeClientes() {
        when(clienteRepositories.findAll()).thenReturn(Arrays.asList(cliente1, cliente2));

        List<Cliente> lista = clienteServices.listarTodos();

        assertEquals(2, lista.size());
        verify(clienteRepositories, times(1)).findAll();
    }

    @Test
    public void eliminar_existente_debeEliminarSinError() {
        when(clienteRepositories.existsById(1L)).thenReturn(true);
        doNothing().when(clienteRepositories).deleteById(1L);

        assertDoesNotThrow(() -> clienteServices.eliminar(1L));
        verify(clienteRepositories, times(1)).deleteById(1L);
    }

    @Test
    public void eliminar_noExistente_debeLanzarRuntimeException() {
        when(clienteRepositories.existsById(99L)).thenReturn(false);

        RuntimeException ex = assertThrows(RuntimeException.class, () -> clienteServices.eliminar(99L));

        assertEquals("Cliente no encontrado", ex.getMessage());
        verify(clienteRepositories, never()).deleteById(anyLong());
    }

    @Test
    public void actualizarCliente_debeGuardarConCambios() {
        when(clienteRepositories.findById(1L)).thenReturn(Optional.of(cliente1));
        when(clienteRepositories.save(any(Cliente.class))).thenAnswer(i -> i.getArgument(0));

        Cliente cambios = new Cliente();
        cambios.setNombre("Juan Actualizado");
        cambios.setCorreo("nuevo@mail.com");

        Cliente actualizado = clienteServices.actualizar(1L, cambios);

        assertEquals("Juan Actualizado", actualizado.getNombre());
        assertEquals("nuevo@mail.com", actualizado.getCorreo());
        assertEquals("123456789", actualizado.getTelefono());
        verify(clienteRepositories, times(1)).save(any(Cliente.class));
    }

    @Test
    public void actualizarCliente_debeHashearNuevaContraseña() {
        when(clienteRepositories.findById(1L)).thenReturn(Optional.of(cliente1));
        when(passwordEncoder.encode("nueva123")).thenReturn("HASHED_NEW");
        when(clienteRepositories.save(any(Cliente.class))).thenAnswer(i -> i.getArgument(0));

        Cliente cambios = new Cliente();
        cambios.setContrasena("nueva123");

        Cliente actualizado = clienteServices.actualizar(1L, cambios);

        assertEquals("HASHED_NEW", actualizado.getContrasena());
        verify(passwordEncoder, times(1)).encode("nueva123");
        verify(clienteRepositories, times(1)).save(any(Cliente.class));
    }
}
