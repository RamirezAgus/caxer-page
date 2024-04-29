import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdOutlineMonitor } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

import SectionSolution from "../components/sectionSolution";
import DescriptionSolution from "../components/descriptionSolution";

import image1 from "../assets/img/caxer-fondo-soluciones.webp";
import image2 from "../assets/img/monitoreo.webp";
import image3 from "../assets/img/consultoria.webp";
import image4 from "../assets/img/contabilidad-accesos.webp";
import image5 from "../assets/img/workflow.webp";

export default function SolucionesPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="container-lg">
      <div className="w-full">
        <div className="relative">
          <img
            src={image1}
            alt="soluciones"
            className="w-full w-full h-24 md:h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-3xl md:text-4xl font-medium tracking-wide">
            <h1 className="bg-black bg-opacity-50 bg-black bg-opacity-50 p-6">
              Soluciones
            </h1>
          </div>
        </div>
        <SectionSolution
          title="Administración y Monitoreo de Dispositivos"
          image={image2}
          description="Herramientas que permiten el control remoto de niveles de suministros, contadores,
                alertas de servicio, reportes de todas las impresoras y MFP instaladas en red."
        />
        <DescriptionSolution
          title="¿Qué se hace cuando se Digitaliza?"
          items={[
            {
              icon: MdOutlineMonitor,
              subtitle: "Captura: ",
              description:
                "De manera manual, o automática, desde un scanner, multifunción, email, unidades de red y web.",
            },
            {
              icon: FaCog,
              subtitle: "Procesa: ",
              description:
                "Mejora de imagen, reconocimiento de caracteres (OCR) y codigos de barras, cambio de formatos de archivos.",
            },
            {
              icon: FaPrint,
              subtitle: "Enruta: ",
              description:
                "Hacia carpetas compartidas, impresoras, email, y a la mayoría de los ECM del mercado.",
            },
          ]}
        />
        <hr className="border-gray-400 w-2/3 flex items-center justify-center mx-auto" />
        <SectionSolution
          title="Administración y Gestión de Usuarios: Contabilidad y Accesos"
          image={image3}
          description="El Software de gestión de impresión ayuda a las empresas a obtener el control y la gestión de su impresión
                    para reducir costos, aumentar la seguridad de los documentos y permitir los programas de sustentabilidad."
        />
        <DescriptionSolution
          title="¿Para qué sirven la contabilidad y el control de accesos?"
          items={[
            {
              icon: FaUnlock,
              subtitle: "Accesos: ",
              description:
                "Permite controlar quién tiene acceso al dispositivo, y de qué manera puede utilizarlo cada usuario (sólo blanco y negro, con máximo de 100 copias color, por ejemplo).",
            },
            {
              icon: FaChartLine,
              subtitle: "Reportes: ",
              description:
                "Muestra diversidad de reportes con los gastos asociados a usuarios, departamentos, proyectos, etc.",
            },
            {
              icon: MdOutlinePhoneIphone,
              subtitle: "Folow you: ",
              description:
                "Bajo el concepto “Follow you” las impresiones se liberan sólo a pedido del usuario, en cualquier dispositivo de la empresa.",
            },
          ]}
        />
        <hr className="border-gray-400 w-2/3 flex items-center justify-center mx-auto" />
        <SectionSolution
          title="Gestor Documental y Workflow"
          image={image4}
          description="Captura, administra, comparte y visualiza cualquier tipo de documentos, ya sea documentos escaneados,
                    documentos electrónicos (texto, planillas, presentaciones), documentos PDF, páginas web, correos electrónicos y
                    todo aquél documento importante para la organización y generar múltiples flujos de trabajo."
        />
        <DescriptionSolution
          title="¿Qué hace un Gestor documental?"
          items={[
            {
              icon: IoIosDocument,
              subtitle: "Administra: ",
              description:
                "De manera manual, o automática, desde un scanner, multifunción, email, unidades de red y web.",
            },
            {
              icon: FaSearch,
              subtitle: "Contenidos: ",
              description:
                "Mejora de imagen, reconocimiento de caracteres (OCR) y codigos de barras, cambio de formatos de archivos.",
            },
            {
              icon: FiRefreshCw,
              subtitle: "Versionado: ",
              description:
                "Hacia carpetas compartidas, impresoras, email, y a la mayoría de los ECM del mercado.",
            },
          ]}
        />
        <hr className="border-gray-400 w-2/3 flex items-center justify-center mx-auto" />
        <SectionSolution
          title="Consultoría – Big Data"
          image={image5}
          description="Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes
                    volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad."
        />
        <DescriptionSolution
          title="Consultoría y Outsourcing"
          items={[
            {
              icon: FaBriefcase,
              subtitle: "Consultoría: ",
              description:
                "Nuestros profesionales están capacitados para participar de reuniones, tanto comerciles como técnicas, hacer un posterior relevamiento del lugar detectando sectores y aplicaciones críticas y, en base a la información recaudada, diseñar la arquitectura de la solución. Estos procedimientos están normalizados con documentación que justifica el accionar correspondiente.",
            },
            {
              icon: MdOutlineComputer,
              subtitle: "Outsourcing: ",
              description:
                'Existen dos modalidades en lo que llamamos "outsourcing". La primera, denominada "in situ", provee los recursos necesarios (humanos, equipamiento, software, etc.) para llevar a cabo el proyecto en vuestra empresa. La segunda, denominada "outside", el proyecto se realiza físicamente en nuestras oficinas y la información se entrega según pautas en el contrato en el formato estipulado..',
            },
          ]}
        />
      </div>
    </section>
  );
}
