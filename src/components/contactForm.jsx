import React from "react";
import { useForm } from "react-hook-form";
import { BsChatText } from "react-icons/bs";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Formulario enviado exitosamente");
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <div className="container mx-auto px-12 py-8 flex flex-col md:flex-row justify-evenly">
      <div className="flex flex-col max-w-md">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Contactanos</h1>
        <p className="font-medium text-gray-700 text-center md:text-left">
          Ante cualquier consulta, sugerencia, solicitud de presupuesto, puede
          contactarse completando el siguiente formulario. Les responderemos a
          la brevedad.
        </p>
        <hr className="border-gray-400 w-2/3 flex my-6 mx-auto md:ml-0" />
        <div className="md:flex flex-wrap justify-evenly hidden">
          <BsChatText className="flex text-[8rem]" />
          <p className="flex items-end font-medium text-xs text-gray-700 w-1/2 text-left ml-4 tracking-wide">
            Además puede comunicrse a través de nuestra línea telefónica al +54
            11 4775-5115 (Lun-vie: 8.30-17.30hs) o por mail a
            ventas@caxer.com.ar.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              {...register("nombre", { required: "Este campo es obligatorio" })}
              placeholder="Ingrese su nombre"
              className={`mt-1 p-2 w-full border rounded-sm ${
                errors.nombre ? "border-cyan-500" : ""
              }`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-xs mt-1">
                {errors.nombre.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              {...register("apellido", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Ingrese su apellido"
              className={`mt-1 p-2 w-full border rounded-sm ${
                errors.apellido ? "border-cyan-500" : ""
              }`}
            />
            {errors.apellido && (
              <p className="text-red-500 text-xs mt-1">
                {errors.apellido.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="telefono"
            {...register("telefono", { required: "Este campo es obligatorio" })}
            placeholder="Ingrese su número de teléfono"
            className={`mt-1 p-2 w-full border rounded-sm ${
              errors.telefono ? "border-cyan-500" : ""
            }`}
          />
          {errors.telefono && (
            <p className="text-red-500 text-xs mt-1">
              {errors.telefono.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: /^\S+@\S+$/i,
            })}
            placeholder="Ingrese su correo electrónico"
            className={`mt-1 p-2 w-full border rounded-sm ${
              errors.email ? "border-cyan-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="mensaje"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            {...register("mensaje", { required: "Este campo es obligatorio" })}
            placeholder="Ingrese su mensaje"
            rows="4"
            className={`mt-1 p-2 w-full border rounded-sm ${
              errors.mensaje ? "border-cyan-500" : ""
            }`}
          ></textarea>
          {errors.mensaje && (
            <p className="text-red-500 text-xs mt-1">
              {errors.mensaje.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
