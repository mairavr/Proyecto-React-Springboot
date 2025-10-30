package com.opticamiroo.projectbackend.services;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;
import java.util.List;
import java.util.Arrays;

import com.opticamiroo.projectbackend.entities.Cliente;
import com.opticamiroo.projectbackend.repositories.ClienteRepositories;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ClienteServicesImplTest {

    @Mock
    private ClienteRepositories clienteRepositories;

    @InjectMocks
    private ClienteServicesImpl clienteServices;

    private Cliente cliente;

    @BeforeEach
    public void setup() {
        cliente = new Cliente();
        cliente.setId(1L);
        cliente.setNombre("Juan");
        cliente.setCorreo("juan@example.com");
        cliente.setTelefono("123456789");
    }

    @Test
    public void crearCliente_debeRetornarClienteGuardado() {
        when(clienteRepositories.save(any(Cliente.class))).thenAnswer(invocation -> {
            Cliente c = invocation.getArgument(0);
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
        when(clienteRepositories.findById(1L)).thenReturn(Optional.of(cliente));

        Cliente obtenido = clienteServices.obtenerId(1L);

        assertNotNull(obtenido);
        assertEquals("Juan", obtenido.getNombre());
        verify(clienteRepositories, times(1)).findById(1L);
    }

    @Test
    public void obtenerId_noExistente_debeLanzarRuntimeException() {
        when(clienteRepositories.findById(99L)).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class, () -> {
            clienteServices.obtenerId(99L);
        });

        assertEquals("Cliente no encontrado", ex.getMessage());
        verify(clienteRepositories, times(1)).findById(99L);
    }

    @Test
    public void listarTodos_debeRetornarListaDeClientes() {
        when(clienteRepositories.findAll()).thenReturn(Arrays.asList(cliente));

        List<Cliente> lista = clienteServices.listarTodos();

        assertEquals(1, lista.size());
        assertEquals("Juan", lista.get(0).getNombre());
        verify(clienteRepositories, times(1)).findAll();
    }

    @Test
    public void eliminarCliente_existente_debeEliminarSinError() {
        when(clienteRepositories.existsById(1L)).thenReturn(true);
        doNothing().when(clienteRepositories).deleteById(1L);

        assertDoesNotThrow(() -> clienteServices.eliminar(1L));
        verify(clienteRepositories, times(1)).deleteById(1L);
    }

    @Test
    public void eliminarCliente_noExistente_debeLanzarRuntimeException() {
        when(clienteRepositories.existsById(99L)).thenReturn(false);

        RuntimeException ex = assertThrows(RuntimeException.class, () -> {
            clienteServices.eliminar(99L);
        });

        assertEquals("Cliente no encontrado", ex.getMessage());
        verify(clienteRepositories, never()).deleteById(anyLong());
    }

    @Test
    public void actualizarCliente_debeGuardarConCambios() {
        when(clienteRepositories.findById(1L)).thenReturn(Optional.of(cliente));
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
}
