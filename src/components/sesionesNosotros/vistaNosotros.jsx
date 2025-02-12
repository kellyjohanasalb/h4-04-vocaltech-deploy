import fondo from "../../assets/images/bg-nosotros.jpg";
import vocal from "../../assets/images/VocalTech.png";
import { useEffect } from "react";

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-end items-center 
                 gap-[184px] lg:px-[402px] lg:pt-[279px] lg:pb-[39px] 
                 px-4 sm:px-8 md:px-16 pt-20 md:pt-32 pb-8 md:pb-12 w-full"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Cuadro del mensaje - No se modifica en desktop */}
      <div className="w-[636px] p-8 flex flex-col items-center gap-[84px] 
                      rounded-[12px] border-4 border-white 
                      bg-[rgba(127,31,232,0.48)] backdrop-blur-[17.35px] 
                      shadow-lg text-center max-w-full lg:max-w-[636px]"
      >
        <h1 className="text-white font-dm-sans text-[48px] font-bold leading-[120%] tracking-wide lg:block">
          Juntos, impulsamos tu <br /> crecimiento
        </h1>
      </div>

      {/* Logo VocalTech - No se mueve en desktop */}
      <div className="flex justify-center items-center w-[352px] h-[56px] mt-[84px] mb-[39px]">
        <img src={vocal} alt="VocalTech" className="w-[352px] h-[56px] object-contain" />
      </div>
    </div>
  );
};

export default Nosotros;
