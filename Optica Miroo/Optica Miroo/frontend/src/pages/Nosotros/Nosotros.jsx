import React from "react";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";

const Nosotros = () => (
  <div id="nosotros" className="p-6 max-w-6xl mx-auto space-y-6">
    
    <h1 className="titulo text-4xl font-bold text-center">ÓPTICA MIROO</h1>

    <div className="gif-centro text-center my-6">
      <img src="/img/gifLentes.gif" alt="Animación óptica" id="gif2" className="mx-auto"/>
    </div>

    <h1 style={{ color: "rgb(233, 79, 24)" }}>¿Quiénes Somos?</h1>
    <p>
      En Óptica Miroo nos dedicamos a cuidar de tu visión...
      Somos mucho más que una óptica tradicional, somos
      tu aliado de confianza en el cuidado de uno de tus sentidos más valiosos: tu visión.
      Combinamos la tecnología más avanzada con el trato humano y personalizado que te mereces.
    </p>

    <h2 style={{ color: "rgb(233, 79, 24)" }}>Nuestra Misión</h2>
    <p>
      Proporcionar soluciones visuales integrales que mejoren la calidad de vida de nuestros clientes,
      ofreciendo productos de alta calidad, atención profesional y un servicio excepcional.
    </p>

    <h2 style={{ color: "rgb(233, 79, 24)" }}>Lo que Nos Hace Únicos</h2>
    <p>🔹 Expertos en Salud Visual<br/>
      - Exámenes de la vista completos y precisos <br/>
      - Tecnología de diagnóstico de última generación<br/>
      - Profesionales optométricos certificados
    </p>
    <p>🔹 Estilo y Calidad<br/>
      - Monturas de primeras marcas y diseños exclusivos<br/>
      - Lentes con tratamientos avanzados (antirreflejante, blue light, fotocromáticos)<br/>
      - Gafas de sol con protección 100% UV
    </p>
    <p>🔹 Servicio Personalizado<br/>
      - Asesoramiento individualizado<br/>
      - Tiempos de entrega récord<br/>
      - Garantías extendidas en todos nuestros productos
    </p>

    <h2 style={{ color: "rgb(233, 79, 24)" }}>Para Todos y Para Todo</h2>
    <p>
      Niños: Control de miopía y monturas infantiles resistentes<br/>
      Jóvenes: Diseños modernos y lentes para dispositivos digitales<br/>
      Adultos: Soluciones para presbicia y comodidad visual<br/>
      Deportistas: Gafas especializadas para cada disciplina
    </p>

  </div>
);

export default Nosotros;



