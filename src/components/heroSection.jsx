import { TiArrowRightThick } from "react-icons/ti";
import etiqueta from "../assets/icons/Bolt-morado.png";
import VOS from "../assets/icons/image 23.png";

const HeroTitle = () => (
  <div className="flex flex-col items-center">
   <div 
  className="inline-flex p-2 items-center justify-between gap-2 rounded-[16px] border border-[#6A11CB] bg-[rgba(106,17,203,0.11)] mt-[7rem]"
>
  <img src={etiqueta} alt="Etiqueta" className="w-6 h-6" />
  <p className="text-[#D4D3F6] font-manrope text-[18px] font-semibold leading-normal">
    Nuevo : ¡Herramienta de diagnóstico personalizado!
  </p>
</div>


    {/* Título */}
    <h1 className="text-white text-center font-dm-sans text-[55px] font-bold leading-normal mt-6">
      Impulsa tu Crecimiento con Soluciones a Medida
    </h1>

    {/* Subtítulo */}
    <p className="text-[#EAEAEA] text-center font-manrope text-[24px] font-semibold leading-normal mt-4 w-[804px] h-[33px] mx-auto">
      VocalTech le pone voz y tecnología a tu proyecto.
    </p>
  </div>
);

const HeroButtons = () => (
  <div className="mt-6 flex justify-center">
    {/* Botón para emprendedores */}
    <button
      className="flex items-center justify-center gap-2 h-[46px] px-[10px] rounded-[16px] bg-[#0F0F0F] hover:bg-[#1a1a1a] text-white font-bold m-2"
    >
      Soluciones para emprendedores
      <TiArrowRightThick className="w-6 h-6 text-white" />
    </button>

    {/* Botón para empresas */}
    <button
      className="flex items-center justify-center gap-[10px] h-[46px] px-[10px] rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] 
            shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] animate-gradientMove 
            text-white font-bold m-2"
    >
      Potencia tu Empresa Ahora
      <TiArrowRightThick className="w-6 h-6 text-white" />
    </button>
  </div>
);

const HeroFooter = () => (
  <div className="mt-12 text-[#CCC] font-manrope text-[20px] font-semibold leading-normal z-20 flex items-center gap-2">
    {/* Texto Powered by */}
    <span>Powered by</span>
    
    {/* NoCountry */}
    <span 
      className="w-[122px] h-[21px] font-bold text-blue-400"
      style={{ display: "inline-block", lineHeight: "21px" }}
    >
      NoCountry
    </span>
    
    {/* Separador & */}
    <span className="text-[#CCC] font-manrope text-[20px] font-semibold leading-normal">
      &
    </span>
    
    {/* Imagen */}
    <img 
      src={VOS} 
      alt="logo VOS" 
      className="w-[42px] h-[42px]"
    />
  </div>
);

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative text-center flex flex-col items-center justify-center min-h-screen bg-hero-background bg-cover bg-center overflow-hidden pb-16"
    >
      <HeroTitle />
      <HeroButtons />
      <HeroFooter />
    </section>
  );
};

export default HeroSection;
