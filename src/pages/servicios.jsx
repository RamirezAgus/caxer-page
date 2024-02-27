import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../assets/img/caxer-servicios.png";
import image2 from "../assets/img/serviceImg.png";
import { TbRefreshAlert } from "react-icons/tb";
import { BiTimer } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";

import SectionSolution from "../components/sectionSolution";
import DescriptionSolution from "../components/descriptionSolution";

export default function Servicios() {
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
              Servicios
            </h1>
          </div>
        </div>
        <SectionSolution
          title="Mantenimientos Preventivos y Periódicos"
          image={image2}
          description="Los servicios de mantenimiento preventivo están dirigidos a empresas u oficinas que requieren que sus Impresoras y Equipos 
                    Multifuncionales nunca se detengan. Estos servicios ayudan a evitar los problemas comunes de los equipos, gestionando el desgaste y 
                    garantizando un funcionamiento continuo. Se ofrecen con la frecuencia y el nivel de uso que requiera el cliente, con atención personalizada 
                    y de calidad en Capital Federal y Gran Buenos Aires."
        />
        <DescriptionSolution
          title="Lo que nos caracteriza"
          items={[
            {
              icon: TbRefreshAlert,
              subtitle: "Visitas periodicas:",
              description:
                "Servicio que incluye inspecciones y revisiones programadas en intervalos regulares para mantener el funcionamiento óptimo y prevenir posibles problemas.",
            },
            {
              icon: BiTimer,
              subtitle: "Tiempo de respuesta:",
              description:
                "Compromiso de proporcionar una rápida respuesta ante cualquier incidencia o solicitud de asistencia técnica, garantizando la prontitud en la atención y resolución de problemas.",
            },
            {
              icon: GiAutoRepair,
              subtitle: "Reparaciones On Site y Laboratorio:",
              description:
                "Servicio de reparación que se lleva a cabo directamente en el lugar donde se encuentra el equipo o sistema, minimizando el tiempo de inactividad y ofreciendo conveniencia al cliente al no requerir desplazamientos adicionales. En algunas ocasiones la complejidad de la avería hace necesario que la reparación sea necesario realizarla en el laboratorio , para que su equipo vuelva a funcionar con total garantía durante un largo periodo de tiempo. En estos casos le enviaremos un presupuesto previo del importe de la reparación y una vez aceptado, enviaremos a nuestra empresa de transportes para recoger la impresora en  su domicilio y proceder a su reparación , limpieza y revisión integral en el laboratorio.",
            },
          ]}
        />
      </div>
    </section>
  );
}
