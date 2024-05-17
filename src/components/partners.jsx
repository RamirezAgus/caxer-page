import logo1 from "../assets/logos/caxer-partner-hp.png";
import logo2 from "../assets/logos/brother-4.svg";
import logo3 from "../assets/logos/dell-2.svg";
import logo4 from "../assets/logos/caxer-partner-print-audit.png";
import logo5 from "../assets/logos/caxer-partner-papercut.png";
import logo6 from "../assets/logos/umango-logo.png";
import logo7 from "../assets/logos/lenovo-2.svg";
import logo8 from "../assets/logos/logitech-2-1.svg";
import logo9 from "../assets/logos/poly-logo2.svg";

const logos = [
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
  { src: logo6, alt: "Logo 6" },
  { src: logo7, alt: "Logo 7" },
  { src: logo8, alt: "Logo 8" },
  { src: logo9, alt: "Logo 9" },
];

export default function Parterns() {
  return (
    <section className="bg-white w-full min-h-screen py-10">
      <h2 className="text-center text-2xl py-10 md:pb-20 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-500">
        NUESTROS PARTNERS
      </h2>
      <div className="flex justify-center items-center pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-18 md:gap-x-14 lg:gap-40">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-32 auto scale-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
