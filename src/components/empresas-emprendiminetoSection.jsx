import empresa from "../assets/icons/Buildings 2.png";
import emprendimiento from "../assets/icons/Buildings 2.png";
import videoEmpresas from "../assets/images/376a102a79128d91587d5269f7120c5d850aaa83.mp4";
import hombre from "../assets/images/video-2.mp4"
import fondoUnificado from "../assets/icons/fonto-unificado.png";
import { useNavigate } from "react-router-dom"; 
import { MdArrowRightAlt } from "react-icons/md";

const SeccionesUnificadas = () => {
    const navigate = useNavigate();


    return (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fondoUnificado})` }}>
            <div className="relative z-10 py-16 px-4 sm:px-8 text-white max-w-7xl mx-auto">
                
            <section id="empresas" className="relative flex flex-col lg:flex-row items-center lg:justify-center py-16 gap-10 px-4 md:px-8 lg:px-0">
            <div className="relative w-full lg:w-2/5 text-left space-y-6 lg:ml-32">
                <div className="flex items-center space-x-2 bg-purple-700 text-white px-3 py-1 rounded-full w-max">
                    <img src={empresa} alt="Icono Empresa" className="w-5 h-5" />
                    <span className="text-sm font-medium">Empresas</span>
                </div>
                <h2 className="text-5xl font-bold leading-[1.2] text-white font-dmSans">
                    Soluciones IT para <br />
                    <span className="block">Empresas</span>
                    <span className="block">Innovadoras</span>
                </h2>
                <p className="text-[18px] font-semibold leading-normal text-[#EAEAEA] font-manrope">
                    Identificamos tus necesidades en áreas clave como comunicación, liderazgo y desarrollo de skills, brindando soluciones prácticas y acceso a talento validado.
                </p>
                <div className="flex space-x-8 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-auto">
                        <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent">+15</p>
                        <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                            Empresas ya están generando resultados positivos con Vocaltech.
                        </p>
                    </div>
                    <div className="w-full lg:w-auto">
                        <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent">+1.000</p>
                        <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                            Talleres impartidos en empresas líderes de todo LATAM.
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4 flex-wrap lg:flex-nowrap">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg"
                            onClick={() => navigate("/form-empresa")}> 
                        Diagnosticar mi empresa
                    </button>
                    <button className="flex items-center justify-center text-white text-lg border-b-2 border-transparent hover:border-violet gap-2">
                        Más Información <MdArrowRightAlt className="text-2xl relative top-1" />
                    </button>
                </div>
            </div>
            <div className="relative w-full lg:w-2/5 flex justify-center">
                <video className="rounded-3xl shadow-lg w-full max-w-[450px] aspect-[4/5] object-cover" autoPlay loop muted>
                    <source src={videoEmpresas} type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div>
        </section>

        <section id="emprendedores" className="relative flex flex-col lg:flex-row-reverse items-center lg:justify-center py-16 gap-10 px-4 md:px-8 lg:px-0">
            <div className="relative w-full lg:w-2/5 text-left space-y-6 lg:mr-32">
                <div className="flex items-center space-x-2 bg-purple-700 text-white px-3 py-1 rounded-full w-max">
                    <img src={emprendimiento} alt="Icono Emprendedores" className="w-5 h-5" />
                    <span className="text-sm font-medium">Emprendedores</span>
                </div>
                <h2 className="text-5xl font-bold leading-[1.2] text-white font-dmSans">
                    Impulsa tu proyecto <br />
                    <span className="block">ahora</span>
                </h2>
                <p className="text-[18px] font-semibold leading-normal text-[#EAEAEA] font-manrope">
                    Como emprendedor, accede a herramientas y recursos diseñados para potenciar tu crecimiento.
                    Completa el diagnóstico gratis y recibe una propuesta personalizada adaptada a tus necesidades.
                </p>
                <div className="flex space-x-8 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-auto">
                        <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent">95%</p>
                        <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                            De nuestros clientes emprendedores recomiendan el servicio.
                        </p>
                    </div>
                    <div className="w-full lg:w-auto">
                        <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent">75%</p>
                        <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                            De las startups lograron atraer inversores en el primer trimestre.
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4 flex-wrap lg:flex-nowrap">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg whitespace-nowrap"
                            onClick={() => navigate("/form-emprendedor")}>Diagnosticar mi emprendimiento
                    </button>
                    <button className="flex items-center justify-center text-white text-lg border-b-2 border-transparent hover:border-violet gap-2 whitespace-nowrap">
                        Más Información <MdArrowRightAlt className="text-2xl relative top-1" />
                    </button>
                </div>
            </div>
            <div className="relative w-full lg:w-2/5 flex justify-center">
                <video className="rounded-3xl shadow-lg w-full max-w-[450px] aspect-[4/5] object-cover" autoPlay loop muted>
                    <source src={hombre} type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </div>
        </section>

            </div>
        </div>
    );
};

export default SeccionesUnificadas;
