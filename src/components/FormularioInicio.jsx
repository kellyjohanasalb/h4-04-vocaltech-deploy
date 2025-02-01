import { FaArrowLeftLong } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import Comunicación from "./cards/Comunicacion";
import Tecnología from "./cards/Tecnologia";
import Combinado from "./cards/Combinado";
import { useNavigate } from "react-router-dom";

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
        <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6">
            {/* Botón regresar */}
            <div className="flex items-center mb-4">
                <button
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                    <FaArrowLeftLong className="w-5 h-5 mr-2" />
                    <span className="font-medium">Regresar</span>
                </button>
            </div>

            {/* Encabezado */}
            <div className="text-center mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span className="text-black">Vocal</span>
                    <span className="text-purple-600">Tech</span>
                </h1>
                <ProgressBar />
            </div>

            {/* Subtítulo */}
            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold text-center">
                ¿Qué necesitas construir o mejorar?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 text-center">
                En Vocaltech te ayudamos a identificar y construir lo que tu negocio necesita.
            </p>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <Comunicación
                    title="Comunicación y Liderazgo"
                    description="Potenciar tus habilidades de comunicación"
                />
                <Tecnología
                    title="Soluciones Tecnológicas"
                    description="Impulsar tus proyectos Tech con soluciones a medida"
                />
                <Combinado
                    title="Combinado"
                    description="Tu proyecto necesita tanto comunicación como tecnología"
                />
            </div>

            {/* Nuevo texto centrado y botones */}
            <div className="text-center mt-8">
                <h3 className="text-gray-800 text-lg sm:text-xl font-medium font-[Manrope]">
                    Para continuar, cuéntanos quién eres para adaptar tu diagnóstico
                </h3>
            </div>

            {/* Botones de selección */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
                {/* Botón Soy Emprendedor */}
                <button
                    onClick={handleEmpresaClick}
                    className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg flex justify-center items-center gap-2 rounded-full border bg-[#C415D7] text-white font-medium transition-transform hover:scale-105"
                >
                    Soy Emprendedor
                </button>

                {/* Botón Represento una Empresa */}
                <button
                    onClick={handleEmprendedorClick}
                    className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg flex justify-center items-center gap-2 rounded-full text-white font-medium bg-gradient-to-r from-[#6A11CB] to-[#2575FC] bg-lightgray bg-blend-multiply transition-transform hover:scale-105"
                >
                    Represento una Empresa
                </button>
            </div>
        </div>
    );
};

export default FormularioInicio;
