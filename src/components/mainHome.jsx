import image1 from "../assets/img/caxer-soluciones.webp";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Main() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    {
      title: "¿Que Soluciones te damos?",
      description:
        "Consultoria - Big Data: Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.",
    },
    {
      title: "Administración y monitoreo de dispositivos",
      description:
        "Herramientas que permiten el control remoto de niveles de suministros, contadores, alertas de servicio, reportes de todas las impresoras y MFP instaladas en red.",
    },
    {
      title: "Administración de gestion de usuarios: Contabilidad y Accesos",
      description:
        "El Software de gestión de impresión ayuda a las empresas a obtener el control y la gestión de su impresión para reducir costos, aumentar la seguridad de los documentos y permitir los programas de sustentabilidad.",
    },
    {
      title: "Digitalización y Captura inteligente de Documentos",
      description:
        "La digitalización permite convertir documentos físicos (papel) en un documento digital por medio de scanner, equipos multifunción y dispositivos móviles (celulares, pads, etc). La captura inteligente de datos permite extraer información estructurada de los documentos, ya sea en papel (para digitalizar), o bien en formato digital para automatizar procesos.",
    },
    {
      title: "Gestor Documental y Workflow",
      description:
        "Captura, administra, comparte y visualiza cualquier tipo de documentos, ya sea documentos escaneados, documentos electrónicos (texto, planillas, presentaciones), documentos PDF, páginas web, correos electrónicos y todo aquél documento importante para la organización y generar múltiples flujos de trabajo.",
    },
  ];

  const intervalDuration = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [texts.length]);


  return (
    <section className="w-full md:grid-cols-1 grid lg:grid-cols-2 gap-10 md:container-lg bg-cyan-500 w-screen py-10 px-10 relative z-30">
      <motion.div
        animate={{ x: ["-5vw", "2vw", "0vw"],  transition: { duration: 2, ease: "easeInOut" } }}
        className="flex justify-center items-center w-full"
      >
        <div className="flex flex-col z-10">
          <img
            src={image1}
            className="w-[22rem] h-auto object-cover shadow-[20px_20px_rgba(3,124,243,0.73)]"
            alt=""
          />
        </div>
      </motion.div>

      <div className="flex flex-col md:container-sm w-full sm:container-md justify-center items-center">
        <div className="flex flex-col max-w-[28rem] md:w-auto sm:w-full h-auto items-center text-white">
          <h2
            className={`font-bold text-2xl md:text-3xl lg:text-4xl text-center pb-2 md:pb-4`}
          >
            {texts[currentTextIndex].title}
          </h2>
          <p className={`text-base md:text-lg text-center`}>
            {texts[currentTextIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
}
