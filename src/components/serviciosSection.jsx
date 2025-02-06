import search from "../assets/icons/Minimalistic Magnifer.png";
import chat from "../assets/icons/Chat Round Call.png";
import copa from "../assets/icons/Cup.png";
import { MdArrowRightAlt } from "react-icons/md";

const Servicios = () => {
    return (
        <section id="servicios" className="py-16 text-center bg-white">
            {/* TÍTULO PRINCIPAL */}
            <p className="text-[#9A9A9A] font-dm-sans text-[20px] font-normal leading-normal mb-6">
                SERVICIOS
            </p>
            
            {/* TÍTULO H2 */}
            <h2 className="text-black font-dm-sans text-[48px] font-bold leading-none max-w-[613px] mx-auto">
                <span className="block">Cómo podemos ayudarte</span>
                <span className="block">a crecer</span>
            </h2>

            {/* TEXTO "EXPLORA" - Movido un poco a la izquierda en Desktop */}
            <div className="w-full flex justify-center md:justify-center lg:justify-end max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 lg:pr-[80px] mt-16 mb-8">
                <p className="inline-flex items-center gap-2 text-black">
                    Explora todas las soluciones que tenemos para ti
                    <MdArrowRightAlt className="w-6 h-6 relative top-[2px]" />
                </p>
            </div>

            {/* TARJETAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-6 px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
                
                {/* Tarjeta 1 - Diagnóstico */}
                <div className="flex flex-col items-start flex-1 max-w-[320px] h-auto px-6 py-6 pb-8 gap-4 bg-[#FBFBFD] shadow-lg rounded-[10px] border border-gray-300">
                    <img src={search} alt="Diagnósticos Personalizados" className="w-8 h-8 mb-2" />
                    <h3 className="text-black font-manrope text-[28px] font-bold leading-none text-left">
                        Diagnósticos Personalizados
                    </h3>
                    <p className="text-xs text-gray-400 uppercase mt-1">Identificar Necesidad</p>
                    <p className="text-gray-600 mt-1">
                        Identificamos tus necesidades y diseñamos un plan a medida que se
                        alinea a tus necesidades con estrategias efectivas para maximizar tu impacto.
                    </p>
                </div>

                {/* Tarjeta 2 - Soluciones */}
                <div className="flex flex-col items-start flex-1 max-w-[320px] h-auto px-6 py-6 pb-8 gap-4 bg-[#FBFBFD] shadow-lg rounded-[10px] border border-gray-300">
                    <img src={copa} alt="Soluciones Integrales" className="w-8 h-8 mb-2" />
                    <h3 className="text-black font-manrope text-[28px] font-bold leading-none text-left">
                        Soluciones Integrales
                    </h3>
                    <p className="text-xs text-gray-400 uppercase mt-1">Ideas que Transforman</p>
                    <p className="text-gray-600 mt-1">
                        Te ayudamos a superar desafíos específicos de tu negocio o proyecto.
                        Comunicación, liderazgo, desarrollar un MVP funcional, acceder a talento TI
                        validado, y mucho más.
                    </p>
                </div>

                {/* Tarjeta 3 - Estrategias */}
                <div className="flex flex-col items-start flex-1 max-w-[320px] h-auto px-6 py-6 pb-8 gap-4 bg-[#FBFBFD] shadow-lg rounded-[10px] border border-gray-300">
                    <img src={chat} alt="Estrategias de Comunicación" className="w-8 h-8 mb-2" />
                    <h3 className="text-black font-manrope text-[28px] font-bold leading-none text-left">
                        Estrategias de Comunicación
                    </h3>
                    <p className="text-xs text-gray-400 uppercase mt-1">Conecta de Manera Auténtica</p>
                    <p className="text-gray-600 mt-1">
                        Transforma la manera en que hablas con tu equipo, tus clientes y el mundo.
                        Te ayudamos a transmitir tus ideas con claridad, confianza y autenticidad.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Servicios;
