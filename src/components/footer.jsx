import { Link } from "react-router-dom";
import logo from "../assets/logo-caxer.png";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <section className="bg-slate-950 w-full min-h-screen flex items-center justify-center px-8 pt-10">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-5xl md:text-7xl font-bold">
          <h1 className="w-full md:w-2/3">¿En que te ayudamos?</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex md:flex-row md:justify-between md:items-center">
          <p className="w-full md:text-2xl md:w-2/3 text-gray-400">
            ¡Ante cualquier duda o sugerencia no dudes en contactarnos!
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link
              to="/contacto"
              className="bg-cyan-500 hover:bg-cyan-600 transition justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
            >
              CONTACTANOS
            </Link>
            
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
            <div>
              <img className="pl-4 w-9/12" src={logo} alt="logo" />
            </div>
            <div className="flex flex-row space-x-8 items-end justify-between">
              <Link
                to="/conocenos"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                nosotros
              </Link>
              <Link
                to="/servicios"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                servicios
              </Link>
              <Link
                to="/postventa"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                post venta
              </Link>
              <Link to="">
                <Icon icon="simple-line-icons:social-facebook" />
              </Link>
              <Link to="">
                <Icon icon="mdi:linkedin" />
              </Link>
              <Link to="">
                <Icon icon="mdi:instagram" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-gray-600" />
        <div className="flex flex-col md:flex-row pt-6 pb-6 justify-evenly gap-2">
          <div className="flex flex-row justify-center">
            <Icon icon="ph:clock" width="18" className="text-gray-500 mr-2" />
            <p className="font-light text-gray-600 text-sm font-normal">
              Lun-vie: 8.30-17.30
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <Icon
              icon="teenyicons:direction-outline"
              width="18"
              className="text-gray-500 mr-2"
            />
            <p className="font-light text-gray-600 text-sm font-normal">
              Zapata 286 - CABA (1426)
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <Icon
              icon="ph:phone-light"
              width="18"
              className="text-gray-500 mr-2"
            />
            <p className="font-light text-gray-600 text-sm font-normal">
              +54 11 4775-5115
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <Icon
              icon="ic:outline-mail"
              width="18"
              className="text-gray-600 mr-2"
            />
            <p className="font-light text-gray-600 text-sm font-normal">
              ventas@caxer.com.ar
            </p>
          </div>
        </div>
        <hr className="border-gray-600" />
        <p className="w-full text-center my-12 text-gray-600">
          Copyright © 2023 CAXER S.A.
        </p>
      </div>
    </section>
  );
}
