import React from "react";
import { useForm } from "react-hook-form";
import { BsChatText } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      user_name: data.name,
      user_lastname: data.lastname,
      user_phone: data.phone,
      user_email: data.email,
      message: data.message,
    };

    emailjs.init(import.meta.env.VITE_USER_ID);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      )
      .then(() => {
        console.log("email was sent sucessfully");
        reset();
      })
      .catch((error) => {
        console.error("error", error);
      });

      try {
        const response = { ok: true };
        if (response.ok) {
          toast.success("Formulario enviado con exito")
        }else{
          toast.error("Error al enviar el formulario")
        }
      } catch (error) {
        toast.error("Error al enviar el formulario", error)
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
            ventas@caxer.com.ar
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Este campo es obligatorio" })}
              placeholder="Ingrese su nombre"
              className={`mt-1 p-2 w-full border rounded-sm ${
                errors.name ? "border-cyan-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <input
              type="text"
              id="lastname"
              {...register("lastname", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Ingrese su apellido"
              className={`mt-1 p-2 w-full border rounded-sm ${
                errors.lastname ? "border-cyan-500" : ""
              }`}
            />
            {errors.lastname && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: "Este campo es obligatorio" })}
            placeholder="Ingrese su número de teléfono"
            className={`mt-1 p-2 w-full border rounded-sm ${
              errors.phone ? "border-cyan-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
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
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Este campo es obligatorio" })}
            placeholder="Ingrese su mensaje"
            rows="4"
            className={`mt-1 p-2 w-full border rounded-sm ${
              errors.message ? "border-cyan-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
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
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
