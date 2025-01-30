import empresa from "../assets/icons/empresas.png";
import { MdArrowRightAlt } from "react-icons/md";
import imagen from "../assets/images/Placeholder Image.png";

const Empresas = () => {
    return (
        <section id="empresas" className="py-16 px-8 bg-gradient-to-r from-purple-900 to-black text-white flex flex-col lg:flex-row items-center lg:items-start">
            {/* Texto */}
            <div className="lg:w-1/2 text-left space-y-6">
                <div className="flex items-center space-x-2 bg-purple-700 text-white px-3 py-1 rounded-full w-max">
                    {/* <img src={empresa} alt="Icono Empresa" className="w-5 h-5" /> */}
                    <span className="text-sm font-medium">Empresas</span>
                </div>
                <h2 className="text-4xl font-bold">Soluciones IT para Empresas Innovadoras</h2>
                <p className="text-lg text-gray-300">
                    Identificamos tus necesidades en áreas clave como comunicación, liderazgo y desarrollo de skills, brindando soluciones prácticas y acceso a talento validado.
                </p>
                <div className="flex space-x-8">
                    <div>
                        <p className="text-3xl font-bold text-yellow-400">+15</p>
                        <p className="text-gray-400">Empresas ya están generando resultados positivos con Vocaltech.</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-yellow-400">+1.000</p>
                        <p className="text-gray-400">Talleres impartidos en empresas líderes de todo LATAM.</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg">
                        Diagnosticar mi empresa
                    </button>
                    <button className="flex items-center text-white text-lg border-b-2 border-transparent hover:border-white">
                        Más Información <MdArrowRightAlt className="ml-2 text-2xl" />
                    </button>
                </div>
            </div>

            {/* Imagen */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                <img src={imagen} alt="Empresas" className="rounded-lg shadow-lg" />
            </div>
        </section>
    );
};

export default Empresas;
