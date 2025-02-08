import search from "../../assets/icons/Minimalistic Magnifer.png";
import cup from "../../assets/icons/Cup.png";
import call from "../../assets/icons/Chat Round Call.png";
import rayo from "../../assets/icons/Bolt-violeta.png";
import magnet from "../../assets/icons/Magnet Wave.png";
import rocket from "../../assets/icons/Rocket.png";

const services = [
  {
    title: "Diagnósticos Personalizados",
    subtitle: "IDENTIFICACIÓN DE NECESIDADES",
    description:
      "Identificamos tus necesidades y diseñamos un plan a medida que se alinee a tus necesidades con estrategias efectivas para maximizar tu impacto.",
    icon: search,
  },
  {
    title: "Soluciones Integrales",
    subtitle: "IMPACTO QUE TRANSFORMA",
    description:
      "Te ayudamos a superar los desafíos específicos de tu negocio y proyecto en comunicación y tecnología.",
    icon: cup,
  },
  {
    title: "Estrategias de Comunicación",
    subtitle: "CONECTA DE MANERA AUTÉNTICA",
    description:
      "Transforma la manera en que te conectas con tu equipo, tus clientes y el mundo. Te acompañamos en tu comunicación con claridad, confianza y autenticidad.",
    icon: call,
  },
  {
    title: "Talento Validado",
    subtitle: "ACCESO A PROFESIONALES TECH",
    description:
      "Accede a profesionales digitales listos para integrarse en tu ecosistema, en +20% de tecnologías y verticales como: No-Code, Desarrollo Web, Data BI y Mobile.",
    icon: rayo,
    extraTitleClass: "mt-[-12px] sm:mt-[-14px]", // Mantiene alineación del título
    extraSubtitleClass: "mt-[-18px] sm:mt-[-14px]", // Subtítulo más arriba
  },
  {
    title: "Mejora tu Pitch",
    subtitle: "PERSUADIR A TRAVÉS DE LA VOZ",
    description:
      "Te ayudamos a crear o mejorar tu pitch para atraer a tus clientes o inversores de forma efectiva. Comunica tu idea, vende y transforma.",
    icon: magnet,
    extraTitleClass: "mt-[-12px] sm:mt-[-14px]", // Mantiene alineación del título
    extraSubtitleClass: "mt-[-18px] sm:mt-[-14px]", // Subtítulo más arriba
  },
  {
    title: "Construcción de MVP",
    subtitle: "TU PRODUCTO LISTO",
    description:
      "Convierte tu idea en un producto funcional en 5 semanas. Desde la validación del concepto hasta el desarrollo. Obtén un MVP sólido, escalable y listo para el mercado.",
    icon: rocket,
    extraTitleClass: "text-[20px] sm:text-[16px]", // Reduce tamaño del título
    extraSubtitleClass: "mt-[-18px] sm:mt-[-14px]", // Subtítulo al mismo nivel que los otros
    extraDescriptionClass: "mt-0 sm:mt-1", // Sube aún más el párrafo
  },
];

const AdaptedServices = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-[224px] pt-[60px] pb-[60px] bg-white">
      <h3 className="text-gray-500 text-xs sm:text-sm uppercase text-center mb-4 tracking-wide">
        SERVICIOS ADAPTADOS A TUS NECESIDADES
      </h3>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 border border-gray-300 rounded-xl shadow-lg flex flex-col gap-3 sm:gap-4 h-full transition-all hover:border-purple-500 hover:shadow-xl"
          >
            {/* Contenedor flexible para icono y título con espacio exacto de 1px */}
            <div className="flex flex-col items-start gap-[1px]">
              <img
                src={service.icon}
                alt={service.title}
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
              <h3
                className={`text-black font-manrope text-[18px] sm:text-[21px] font-extrabold leading-normal min-h-[64px] flex items-center ${service.extraTitleClass || ""
                  }`}
              >
                {service.title}
              </h3>
            </div>
            {/* Subtítulo ajustado para mobile */}
            <p
              className={`text-[10px] sm:text-[12px] text-[#9A9A9A] font-manrope font-medium leading-none uppercase w-full tracking-wide ${service.extraSubtitleClass || "mt-2"
                }`}
            >
              {service.subtitle}
            </p>
            {/* Descripción alineada con espacio uniforme */}
            <p className={`text-gray-700 text-xs sm:text-sm leading-relaxed ${service.extraDescriptionClass || "mt-3 sm:mt-4"} flex-grow`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdaptedServices;
