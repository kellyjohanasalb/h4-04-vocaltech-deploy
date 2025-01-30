import search from "../assets/icons/Minimalistic Magnifer.png";
import chat from "../assets/icons/Chat Round Call.png";
import copa from "../assets/icons/Cup.png";
import { MdArrowRightAlt } from "react-icons/md";

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 text-center bg-white">
    {/* TÍTULO H2 */}
    <h2 className="text-black text-center font-dm-sans text-[48px] font-bold leading-none max-w-[613px] mx-auto">
      <span className="block">Cómo podemos ayudarte</span>
      <span className="block">a crecer</span>
    </h2>

{/* Párrafo con ícono */} 
<div className="w-full flex justify-end mt-16">
  <p className="inline-flex items-center gap-2 text-black mr-16">
    Explora todas las soluciones que tenemos para ti
    <MdArrowRightAlt className="w-6 h-6 relative top-[2px]" />
  </p>
</div>
  
   {/* TARJETAS */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-[49px] mt-6 px-6 md:px-16">
  {/* tarjeta 1 - Diagnóstico */}
  <div className="bg-white shadow-lg p-[49px] rounded-lg border border-gray-200">
    <img src={search} alt="Diagnósticos Personalizados" className="w-8 h-8 mb-3 mx-auto" />
    <h3 className="text-lg font-semibold text-black">Diagnósticos Personalizados</h3>
    <p className="text-xs text-gray-400 uppercase">Identificar Necesidad</p>
    <p className="text-gray-600 mt-2">
      Identificamos tus necesidades y diseñamos un plan a medida que se alinea a tus necesidades con estrategias efectivas para maximizar tu impacto.
    </p>
  </div>

  {/* tarjeta 2 - Soluciones */}
  <div className="bg-white shadow-lg p-[49px] rounded-lg border border-gray-200">
    <img src={copa} alt="Soluciones Integrales" className="w-8 h-8 mb-3 mx-auto" />
    <h3 className="text-lg font-semibold text-black">Soluciones Integrales</h3>
    <p className="text-xs text-gray-400 uppercase">Ideas que Transforman</p>
    <p className="text-gray-600 mt-2">
      Te ayudamos a superar desafíos específicos de tu negocio o proyecto. Comunicación, liderazgo, desarrollar un MVP funcional, acceder a talento TI validado, y mucho más.
    </p>
  </div>

  {/* tarjeta 3 - Estrategias */}
  <div className="bg-white shadow-lg p-[49px] rounded-lg border border-gray-200">
    <img src={chat} alt="Estrategias de Comunicación" className="w-8 h-8 mb-3 mx-auto" />
    <h3 className="text-lg font-semibold text-black">Estrategias de Comunicación</h3>
    <p className="text-xs text-gray-400 uppercase">Conecta de Manera Auténtica</p>
    <p className="text-gray-600 mt-2">
      Transforma la manera en que hablas con tu equipo, tus clientes y el mundo. Te ayudamos a transmitir tus ideas con claridad, confianza y autenticidad.
    </p>
  </div>
</div>

  </section>
  
  );
};

export default Servicios;
