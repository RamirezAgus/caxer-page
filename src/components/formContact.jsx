import { useForm } from "react-hook-form";
import image1 from '../assets/logo-caxer.png'

const fields = [
    {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
    },
    {
        name: "lastName",
        label: "Last Name",
        type: "text",
        required: true,
    },
    {
        name: "phone",
        label: "Phone",
        type: "number",
        required: true,
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        pattern: /^\S+@\S+$/i,
    },
    {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
    },
];

export default function FormContact() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col justify-start items-center py-4">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="text-5xl font-medium tracking-wide my-6">CONTACTO</h2>
                <p className="flex font-normal text-left w-2/3 p-4">
                    Ante cualquier consulta, sugerencia, solicitud de presupuesto,
                    puede contactarse completando el
                    siguiente formulario. Les responderemos a la brevedad.
                </p>
            </div>
            <form
                className="my-10 w-96 m-auto bg-cyan-500 p-8 rounded"
                onSubmit={handleSubmit(onSubmit)}
            >
                {fields.map((field) => (
                    <div
                        key={field.name}
                        className={`${field.type === "textarea"
                            ? "mb-6"
                            : "grid grid-cols-1 mb-6 gap-3"
                            }w-full`}
                    >
                        <div className="text-left flex flex-col gap-2 w-full">
                            <label className="font-medium text-white">{field.label}</label>
                            {field.type === "textarea" ? (
                                <textarea
                                    {...register(field.name, { required: field.required })}
                                    className={`border ${errors && errors[field.name] ? "border-red-500" : "border-gray-300"
                                        } text-sm font-medium mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-red-500`}
                                    placeholder={`Type ${field.label.toLowerCase()}...`}
                                ></textarea>
                            ) : (
                                <input
                                    {...register(field.name, {
                                        required: field.required,
                                        pattern: field.pattern,
                                    })}
                                    className={`border ${errors && errors[field.name] ? "border-red-500" : "border-gray-300"
                                        } text-sm font-medium mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500`}
                                    type={field.type}
                                    placeholder={`Enter ${field.label.toLowerCase()}`}
                                />
                            )}
                            {errors && errors[field.name] && (
                                <p className="text-red-500 text-xs italic">
                                    {`${field.label} is required`}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
                <div className="flex justify-between mt-8 w-full text-left">
                    <button
                        className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-cyan-600 text-white text-sm font-bold  rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-cyan-600 lg:m-0 md:w-max md:px-6"
                        title="Send"
                        type="submit"
                    >
                        <span>Send</span>
                    </button>
                    <img src={image1} alt="logo-caxer" className="w-32 h-12"/>
                </div>
            </form>
        </div>
    );
}
