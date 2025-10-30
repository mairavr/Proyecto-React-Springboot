import React, { useState } from "react";

import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";
import "../../assets/css/blog.css";
import "../../assets/css/toast.css";

const noticias = [
  {
    id: "detalle1",
    img: "img/avancesTecnologicos.webp",
    titulo: "Avances Tecnológicos en Óptica",
    resumen: `Los avances tecnológicos en óptica mejoran la calidad visual, <br>
      comodidad y personalización, con lentes progresivas, fotocromáticas y pruebas de visión en línea.`,
    detalle: `<b>Santiago, 17 de septiembre de 2025</b> — El sector óptico vive una transformación sin
      precedentes gracias al lanzamiento de las nuevas lentes inteligentes VisioAdapt 5.0, desarrolladas
      por la startup chilena OptiTech. Estas lentes combinan tecnología progresiva, fotocromática y sensores <br>
      de luz ambiental para adaptarse automáticamente a las condiciones del entorno. <br>
      <b>Entre sus características más destacadas: </b> <br><br>
      ● Ajuste dinámico de enfoque: ideal para usuarios con presbicia o visión mixta. <br>
      ● Filtro de luz azul inteligente: que se activa solo en presencia de pantallas digitales. <br>
      ● Sincronización con apps móviles: permite realizar autoevaluaciones visuales y recibir recomendaciones personalizadas. <br><br>
      “Estamos ante una nueva era donde la óptica se fusiona con la inteligencia artificial para ofrecer soluciones verdaderamente personalizadas”, afirmó la Dra. Marcela Ríos, directora de innovación en OptiTech.`
  },
  {
    id: "detalle2",
    img: "img/saludOcular.jpeg",
    titulo: "Noticias y Actualizaciones en Salud Ocular",
    resumen: `A través de esta sección compartimos con nuestros pacientes las últimas novedades en tratamientos, <br>
      investigaciones y tecnologías que ayudan a prevenir y mejorar diferentes condiciones oculares.`,
    detalle: `<b>Valparaíso, 17 de septiembre de 2025</b> — Investigadores del Instituto de Salud Visual de la Universidad Técnica Federico Santa María han iniciado un ensayo clínico pionero en Latinoamérica que busca prevenir la degeneración macular mediante terapia genética. <br>
      Este estudio involucra a más de 300 pacientes mayores de 60 años y utiliza vectores virales para introducir genes protectores directamente en la retina. <br>
      <b>Resultados preliminares: </b> <br><br>
      ● Reducción del 40% en la progresión de la enfermedad. <br>
      ● Mejora en la sensibilidad visual en un 25% de los casos tratados. <br>
      ● Alta tolerancia y mínima reacción adversa en los participantes. <br><br>
      Además, se ha lanzado una campaña informativa en centros ópticos del país para educar a la población sobre los factores de riesgo y las nuevas opciones de tratamiento. <br>
      “La prevención comienza con la información. Queremos que cada paciente entienda que la ciencia está avanzando para proteger su visión”, señaló el Dr. Álvaro Méndez, líder del proyecto.`
  },
  {
    id: "detalle3",
    img: "img/tendencia.jpg",
    titulo: "Tendencias en Lentes y Moda",
    resumen: `En Óptica Miroo nos mantenemos al día con los avances en el cuidado de la vista. <br>
      A través de esta sección compartimos con nuestros pacientes las últimas novedades en tratamientos, investigaciones y tecnologías.`,
    detalle: `<b>Providencia, 17 de septiembre de 2025</b> — Las vitrinas de las ópticas chilenas se llenan de color y conciencia ecológica con la llegada de la colección EcoRetro, una línea de lentes fabricados con materiales reciclados y diseños inspirados en los años 70. <br>
      La tendencia actual combina estética vintage con responsabilidad ambiental. <br><br>
      <b>Características de la colección EcoRetro: </b> <br>
      ● Monturas biodegradables hechas de acetato vegetal. <br>
      ● Colores vibrantes como ámbar, verde oliva y azul petróleo. <br>
      ● Diseños oversize que evocan la estética retro con un toque moderno. <br><br>
      Según datos de la Cámara Nacional de Ópticas, el 68% de los consumidores jóvenes prioriza la sustentabilidad al elegir sus lentes. <br>
      “Ya no se trata solo de ver bien, sino de verse bien y hacer el bien”, comentó Camila Soto, diseñadora de la marca LenteLibre, que colabora con comunidades locales para producir monturas artesanales.`
  }
];

export default function Blog() {
  const [detalleVisible, setDetalleVisible] = useState(null);

  const mostrarDetalle = (id) => {
    setDetalleVisible(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  const cerrarDetalle = () => setDetalleVisible(null);

  return (
    <div className="blog-page">
      <h1 className="titulo" style={{ textAlign: "center", margin: "20px 0" }}>
        ÓPTICA MIROO
      </h1>

      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>
        Noticias del día
      </h2>

      <div className="contenedor-noticias">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="tarjeta"
            onClick={() => mostrarDetalle(noticia.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={noticia.img} alt={noticia.titulo} width="250" height="200" />
            <div className="contenido">
              <h2>{noticia.titulo}</h2>
              <p dangerouslySetInnerHTML={{ __html: noticia.resumen }} />
            </div>
          </div>
        ))}
      </div>

      {noticias.map(
        (noticia) =>
          detalleVisible === noticia.id && (
            <div key={noticia.id} className="detalle" id={noticia.id}>
              <div className="cerrar" onClick={cerrarDetalle}>
                ✖ Cerrar
              </div>
              <h2>{noticia.titulo}</h2>
              <p dangerouslySetInnerHTML={{ __html: noticia.detalle }} />
            </div>
          )
      )}
    </div>
  );
}
