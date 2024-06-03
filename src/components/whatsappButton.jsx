import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    return(
        <a
            href={`https://wa.me/${whatsappNumber}`}
            className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40"
            target="_blank"
            rel="noopener noreferrer"
            >
                <FaWhatsapp className="text-xl"/>
        </a>
    )
}