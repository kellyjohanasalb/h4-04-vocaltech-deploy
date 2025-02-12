import Navbar from "../components/Navbar";
import { TiLocationArrowOutline } from "react-icons/ti";
import citi from "../assets/icons/image 28.png";
import Volswagen from "../assets/icons/image 27.png";
import Pae from "../assets/icons/image 29.png";
import HSBC from "../assets/icons/image 25.png";
import globant from "../assets/icons/image 26.png";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[116px] container mx-auto py-10 px-4">
        <div className="grid md:grid-cols-2 gap-[24px] items-start">
          <div className="flex flex-col justify-start items-center w-[390px] ml-40">
            <h2 className="text-[42px] font-bold text-black leading-[120%] font-dm-sans w-[390px]">
              Contactar al equipo de Vocaltech
            </h2>
            <div className="mt-[24px] w-[390px]">
              <p className="text-[18px] font-semibold text-[#424242] font-manrope">
                Las mejores ideas cobran vida cuando se comunican con claridad y estrategia.
                En VocalTech, te ayudamos a conectar, liderar y construir con impacto.
              </p>
              <p className="mt-2 text-[18px] font-semibold text-[#424242] font-manrope"><br/>Escríbenos y comencemos a crear juntos.</p>
              <p className="mt-2 text-[18px] font-semibold text-[#9A9A9A] font-manrope w-[390px]">
               <br/> Miles de emprendedores y empresas ya confían en VocalTech para impulsar su comunicación y desarrollo, ¿te sumas?
              </p>
            </div>
            <div className="flex justify-center space-x-4 mt-[24px] -ml-20 w-full grayscale">
              <img src={Volswagen} alt="Volswagen" className="w-[56.034px] h-[31px] flex-shrink-0" />
              <img src={Pae} alt="Pae" className="w-[56.034px] h-[31px] flex-shrink-0" />
              <img src={HSBC} alt="HSBC" className="w-[56.034px] h-[31px] flex-shrink-0" />
              <img src={globant} alt="Globant" className="w-[56.034px] h-[31px] flex-shrink-0" />
              <img src={citi} alt="Citi" className="w-[56.034px] h-[31px] flex-shrink-0" />
            </div>
          </div>
          <div className="w-[592px] p-8 flex flex-col items-start gap-[24px] rounded-[16px] border border-[#EAEAEA] bg-white shadow-lg">
            <h4 className="text-2xl  text-black font-manrope">Formulario de Contacto</h4>
            <form className="w-full flex flex-col items-start gap-[16px]">
              <div className="w-full">
                <label className="block text-black font-manrope text-[18px] font-medium">Nombre *</label>
                <input type="text" placeholder="Tu nombre / Empresa" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="w-full">
                <label className="block text-black font-manrope text-[18px] font-medium">Email *</label>
                <input type="email" placeholder="ejemplo@correo.com" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="w-full">
                <label className="block text-black font-manrope text-[18px] font-medium">Asunto *</label>
                <input type="text" placeholder="Asunto de tu consulta" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="w-full">
                <label className="block text-black font-manrope text-[18px] font-medium">Mensaje *</label>
                <textarea rows="4" placeholder="¿En qué te podemos ayudar?" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-[388px] h-[46px] bg-[#2684FC] text-white rounded-[16px] flex justify-center items-center gap-2 px-4 text-lg  hover:bg-blue-700 ml-16">
                <TiLocationArrowOutline className="text-white text-2xl fill-white" />
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
