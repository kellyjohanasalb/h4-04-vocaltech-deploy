import fondo from "../../assets/images/bg-nosotros.jpg";
import vocal from "../../assets/images/VocalTech.png";
import { useEffect } from "react";

const Nosotros = () => {
    // Hacer scroll hacia arriba cuando se monta la vista
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);



  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-end items-center gap-[184px] px-[402px] pt-[279px] pb-[39px]"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="w-[636px] p-8 flex flex-col items-center gap-[84px] rounded-[12px] border-4 border-white bg-[rgba(127,31,232,0.48)] backdrop-blur-[17.35px] shadow-lg text-center">
        <h1 className="text-white font-dm-sans text-[48px] font-bold leading-[120%] tracking-wide">
          Juntos, impulsamos tu <br /> crecimiento
        </h1>
      </div>
      <div className="flex justify-center items-center w-[352px] h-[56px] mt-[84px] mb-[39px]">
        <img src={vocal} alt="VocalTech" className="w-[352px] h-[56px] object-contain" />
      </div>
    </div>
  );
};

export default Nosotros;
