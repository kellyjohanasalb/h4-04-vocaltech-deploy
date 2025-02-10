import citi from  "../../assets/icons/image 28.png";
import Volswagen from "../../assets/icons/image 27.png";
import Pae from "../../assets/icons/image 29.png";
import HSBC  from "../../assets/icons/image 25.png";
import globant from "../../assets/icons/image 26.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ClientsSection = () => {
  const navigate = useNavigate();


  return (
    <section className="text-center py-12 px-4 bg-white">
      <h3 className="text-[#424242] text-center font-dm-sans text-[20px] font-normal leading-normal self-stretch">Clientes</h3>
      <h2 className="text-[#000] text-center font-dm-sans text-[42px] font-bold leading-[120%] self-stretch mt-2">
        Nuestra Trayectoria en Comunicación y Tech
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
        <img src={Volswagen} alt="Volkswagen" className="w-[120px] h-[66px] grayscale" />
        <img src={Pae} alt="PAE Travel" className="w-[120px] h-[66px] grayscale" />
        <img src={HSBC} alt="HSBC" className="w-[120px] h-[66px] grayscale" />
        <img src={globant} alt="Globant" className="w-[120px] h-[66px] grayscale" />
        <img src={citi} alt="Citi" className="w-[120px] h-[66px] grayscale" />
      </div>
      
      <p className="text-[#424242] text-center font-manrope text-[20px] font-medium mt-6 max-w-[996px] mx-auto">
        ¿Necesitas asesoría?
      </p>
      
      <div className="flex justify-center mt-4">
        <button className="flex w-[287px] h-[46px] px-4 py-2 rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] via-[#6A11CB] to-[#D230E3] text-white font-semibold shadow-lg items-center justify-center gap-[10px] flex-shrink-0 inset-shadow transition hover:opacity-80"
        onClick={() => navigate("/contacto")}
        >
          <span className="font-manrope text-[18px] font-semibold">Contactar Soporte</span>
          <FaLongArrowAltRight className="text-white text-lg relative top-[1px]" />
        </button>
      </div>
    </section>
  );
};

export default ClientsSection;
