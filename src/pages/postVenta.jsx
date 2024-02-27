import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../assets/img/post-venta.webp";
import image2 from "../assets/img/postventa.webp";
import { BiSupport } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import { GrPrint } from "react-icons/gr";

import SectionSolution from "../components/sectionSolution";
import DescriptionSolution from "../components/descriptionSolution";

export default function PostVenta() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="container-lg">
      <div className="w-full">
        <div className="relative">
          <img
            src={image1}
            alt="servicios"
            className="w-full w-full h-24 md:h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-3xl md:text-4xl font-medium tracking-wide">
            <h1 className="bg-black bg-opacity-50 bg-black bg-opacity-50 p-6">
              Post Venta
            </h1>
          </div>
        </div>
        <SectionSolution
          title="Acompañamiento Integral"
          image={image2}
          description="Nos comprometemos a brindarte un servicio postventa 
          excepcional para tus equipos de impresión y multifunción. Desde la 
          instalación inicial hasta cualquier necesidad técnica posterior, estamos 
          aquí para garantizar que tu experiencia con nuestros productos 
          sea sin complicaciones. Nuestro equipo está disponible para proporcionarte 
          el soporte que necesitas en cada paso del camino, asegurando tu tranquilidad y 
          confianza en nuestros dispositivos."
        />
        <DescriptionSolution
          title="Lo que nos caracteriza"
          items={[
            {
              icon: BiSupport,
              subtitle: "Servicio Continuo de Soporte:",
              description:
                "Estamos disponibles las 24/7 para resolver cualquier pregunta o problema con tus equipos de impresión o multifunción, brindándote ayuda rápida y efectiva en todo momento.",
            },
            {
              icon: GiAutoRepair,
              subtitle: "Asistencia Técnica Especializada:",
              description:
                "Nuestros técnicos altamente capacitados están dedicados a resolver tus problemas de manera eficiente, ofreciéndote soluciones personalizadas para tus necesidades específicas.",
            },
            {
              icon: GrPrint,
              subtitle: "Acompañamiento Integral:",
              description:
                "Te ofrecemos todo el apoyo necesario, desde la instalación hasta las actualizaciones de software, para garantizar que aproveches al máximo tus equipos de impresión y multifunción en cada etapa del proceso.",
            },
          ]}
        />
      </div>
    </section>
  );
}
