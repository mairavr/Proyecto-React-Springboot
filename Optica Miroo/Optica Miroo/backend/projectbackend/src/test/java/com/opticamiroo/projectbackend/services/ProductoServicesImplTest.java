package com.opticamiroo.projectbackend.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.opticamiroo.projectbackend.entities.Producto;
import com.opticamiroo.projectbackend.repositories.ProductoRepositories;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ProductoServicesImplTest {

    @Mock
    private ProductoRepositories productoRepositories;

    @InjectMocks
    private ProductoServicesImpl productoServices;

    private Producto producto1;
    private Producto producto2;

    @BeforeEach
    public void setup() {
        producto1 = new Producto();
        producto1.setId(1L);
        producto1.setNombre("Producto A");
        producto1.setDescripcion("Desc A");
        producto1.setPrecio(100L);
        producto1.setActivo(true);

        producto2 = new Producto();
        producto2.setId(2L);
        producto2.setNombre("Producto B");
        producto2.setDescripcion("Desc B");
        producto2.setPrecio(200L);
        producto2.setActivo(true);
    }

    @Test
    public void crearProducto_debeGuardarYRetornarProducto() {
        when(productoRepositories.save(any(Producto.class))).thenAnswer(invocation -> {
            Producto p = invocation.getArgument(0);
            p.setId(10L);
            return p;
        });

        Producto nuevo = new Producto();
        nuevo.setNombre("Nuevo Producto");
        nuevo.setDescripcion("Nuevo Desc");
        nuevo.setPrecio(50L);

        Producto creado = productoServices.crear(nuevo);

        assertNotNull(creado);
        assertEquals(10L, creado.getId());
        assertEquals("Nuevo Producto", creado.getNombre());
        verify(productoRepositories, times(1)).save(any(Producto.class));
    }

    @Test
    public void obtenerId_existente_debeRetornarProducto() {
        when(productoRepositories.findById(1L)).thenReturn(Optional.of(producto1));

        Producto resultado = productoServices.obtenerId(1L);

        assertNotNull(resultado);
        assertEquals("Producto A", resultado.getNombre());
        verify(productoRepositories, times(1)).findById(1L);
    }

    @Test
    public void obtenerId_noExistente_debeLanzarRuntimeException() {
        when(productoRepositories.findById(99L)).thenReturn(Optional.empty());

        RuntimeException ex = assertThrows(RuntimeException.class, () -> {
            productoServices.obtenerId(99L);
        });

        assertEquals("Producto no encontrado", ex.getMessage());
        verify(productoRepositories, times(1)).findById(99L);
    }

    @Test
    public void listarTodos_debeRetornarListaDeProductos() {
        when(productoRepositories.findAll()).thenReturn(Arrays.asList(producto1, producto2));

        List<Producto> lista = productoServices.listarTodos();

        assertEquals(2, lista.size());
        verify(productoRepositories, times(1)).findAll();
    }

    @Test
    public void eliminar_existente_debeEliminarSinError() {
        when(productoRepositories.existsById(1L)).thenReturn(true);
        doNothing().when(productoRepositories).deleteById(1L);

        assertDoesNotThrow(() -> productoServices.eliminar(1L));
        verify(productoRepositories, times(1)).deleteById(1L);
    }

    @Test
    public void eliminar_noExistente_debeLanzarRuntimeException() {
        when(productoRepositories.existsById(99L)).thenReturn(false);

        RuntimeException ex = assertThrows(RuntimeException.class, () -> {
            productoServices.eliminar(99L);
        });

        assertEquals("Producto no encontrado", ex.getMessage());
        verify(productoRepositories, never()).deleteById(anyLong());
    }

    @Test
    public void actualizarProducto_debeGuardarConNuevosDatos() {
        when(productoRepositories.findById(1L)).thenReturn(Optional.of(producto1));
        when(productoRepositories.save(any(Producto.class))).thenAnswer(i -> i.getArgument(0));

        Producto cambios = new Producto();
        cambios.setDescripcion("Nueva Desc");
        cambios.setPrecio(999L);

        Producto actualizado = productoServices.actualizar(1L, cambios);

        assertEquals("Nueva Desc", actualizado.getDescripcion());
        assertEquals(999L, actualizado.getPrecio());
        verify(productoRepositories, times(1)).save(any(Producto.class));
    }

    @Test
    public void desactivarProducto_debeCambiarActivoAFalso() {
        when(productoRepositories.findById(1L)).thenReturn(Optional.of(producto1));
        when(productoRepositories.save(any(Producto.class))).thenAnswer(i -> i.getArgument(0));

        Producto result = productoServices.desactivar(1L);

        assertFalse(result.getActivo());
        verify(productoRepositories, times(1)).save(any(Producto.class));
    }
}
