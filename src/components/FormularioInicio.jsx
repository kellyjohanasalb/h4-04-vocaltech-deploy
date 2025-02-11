import { FaArrowLeftLong } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import Comunicación from "./cards/Comunicacion";
import Tecnología from "./cards/Tecnologia";
import Combinado from "./cards/Combinado";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/image 2.svg"; // Asegúrate de que el nombre sea correcto

const FormularioInicio = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    };

    const handleEmpresaClick = () => {
        navigate("/form-empresa");
    };

    const handleEmprendedorClick = () => {
        navigate("/form-emprendedor");
    };

    return (
        <div className="w-full h-full px-32 bg-white 2xl:px-[450px]">
        <div className="w-full h-full max-w-5xl p-6 ">
            {/* Contenedor del botón de regresar */}
            <div className="mb-4">
                <button
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 transition-colors hover:text-gray-800"
                >
                    <FaArrowLeftLong className="w-5 h-5 mr-2" />
                    <span className="font-medium">Regresar</span>
                </button>
            </div>

            {/* Contenedor centrado del logo y la barra de progreso */}
            <div className="flex flex-col items-center">
                <img 
                    src={logo} 
                    alt="Vocaltech" 
                    className="w-[328px] h-auto max-w-full mb-4"
                />
                <ProgressBar />
            </div>

            {/* Subtítulo */}
            <h2 className="mt-6 text-2xl font-semibold text-center text-gray-700">
                ¿Qué necesitas construir o mejorar?
            </h2>
            <p className="mt-2 text-sm text-center text-gray-500">
                En Vocaltech te ayudamos a identificar y construir lo que tu negocio necesita.
            </p>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
                <Comunicación
                    className="min-h-[250px] flex flex-col justify-between"
                    title="Comunicación y Liderazgo"
                    description="Potenciar tus habilidades de comunicación"
                />
                <Tecnología
                    className="min-h-[250px] flex flex-col justify-between"
                    title="Soluciones Tecnológicas"
                    description="Impulsar tus proyectos Tech con soluciones a medida"
                />
                <Combinado
                    className="min-h-[250px] flex flex-col justify-between"
                    title="Combinado"
                    description="Tu proyecto necesita tanto comunicación como tecnología"
                />
            </div>

            {/* Texto centrado y botones */}
            <div className="mt-8 text-center">
                <h3 className="text-[#424242] text-xl font-medium font-[Manrope]">
                    Para continuar, cuéntanos quién eres para adaptar tu diagnóstico
                </h3>
            </div>

            {/* Botones de selección */}
            <div className="flex flex-col flex-wrap justify-center gap-4 mt-6 sm:flex-row sm:gap-6">
                {/* Botón Soy Emprendedor */}
                <button
                    onClick={handleEmprendedorClick}
                    className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg flex justify-center items-center gap-2 rounded-full border bg-[#C415D7] text-white font-medium transition-transform hover:scale-105"
                >
                    Soy Emprendedor
                </button>

                {/* Botón Represento una Empresa */}
                <button
                    onClick={handleEmpresaClick}
                    className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg flex justify-center items-center gap-2 rounded-full text-white font-medium bg-gradient-to-r from-[#6A11CB] to-[#2575FC] bg-lightgray bg-blend-multiply transition-transform hover:scale-105"
                >
                    Represento una Empresa
                </button>
            </div>
        </div>
        </div>
    );
};

export default FormularioInicio;
