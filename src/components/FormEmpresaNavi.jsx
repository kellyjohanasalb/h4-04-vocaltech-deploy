import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgresBar from "./ProgresBar";
import { CgArrowRight } from "react-icons/cg";

export default function FormEmpresaNavi() {
    const navigate = useNavigate();
    const [selectedOption6, setSelectedOption6] = useState(""); // Estado para la respuesta de la pregunta 6

    const handleBackClick = () => {
        navigate("/formularioinicio");
    };

    const handleNextClick = (e) => {
        e.preventDefault();

        if (selectedOption6 === "Roles y responsabilidades poco claras" || selectedOption6 === "Muy satisfecho/a") {
            navigate("/mvp1"); // Navegar a MVP1
        } else if (
            selectedOption6 === "Satisfecho/a" ||
            selectedOption6 === "Neutral" ||
            selectedOption6 === "Insatisfecho/a" ||
            selectedOption6 === "Muy insatisfecho/a"
        ) {
            navigate("/comunicacion1"); // Navegar a Comunicacion1
        } else {
            alert("Por favor, selecciona una opción para la pregunta 6.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            {/* Header */}
            <header className="flex items-center justify-center w-full max-w-4xl px-4">
                <button onClick={handleBackClick} className="absolute flex items-center gap-4 text-lg font-medium text-black lg:left-36 max-lg:left-72">
                    <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
                            fill="black"
                        />
                    </svg>
                    Regresar
                </button>
                <img
                    src="/VocalTech.png"
                    alt="VocalTech"
                    className="lg:w-[328px] h-[54px]"
                />
            </header>

            {/* Progress Bar */}
            <div className="flex items-center justify-between w-full max-w-4xl mt-8">
                <ProgresBar />
            </div>

            {/* Image Card */}
            <div className="w-full max-w-4xl mt-8">
                <div className="relative w-full h-auto overflow-hidden rounded-lg">
                    <img
                        src="/empresa.png"
                        alt="Empresas"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Form */}
            <form className="w-full max-w-4xl px-4 mt-8" onSubmit={handleNextClick}>
                {/* Preguntas anteriores */}
                <div className="mb-6">
                    <label htmlFor="empresa" className="block text-lg font-semibold">
                        1. Nombre de tu Empresa
                    </label>
                    <input
                        id="empresa"
                        type="text"
                        placeholder="Nombre de tu empresa"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="ubicacion" className="block text-lg font-semibold">
                        2. Ubicación
                    </label>
                    <input
                        id="ubicacion"
                        type="text"
                        placeholder="Ubicación de tu empresa"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="sector" className="block text-lg font-semibold">
                        3. Redes Sociales / Sitio Web
                    </label>
                    <input
                        id="sector"
                        type="text"
                        placeholder="Redes / Sitio web de tu emprendimiento"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="sector" className="block text-lg font-semibold">
                        4. Sector de Actividad
                    </label>
                    <input
                        id="sector"
                        type="text"
                        placeholder="Ej. Tecnológico Comercial"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        5. ¿Número de Empleados?
                    </label>
                    <div className="mt-4 space-y-2">
                        {["de 1 a 10", "de 11 a 50", "de 51 a 99", "más de 100"].map((etapa, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="etapa"
                                    value={etapa}
                                    className="hidden peer"
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{etapa}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 6 */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        6. ¿Qué tan satisfecho/a estás con la comunicación interna dentro de tu equipo?
                    </h2>
                    <div className="mt-4 space-y-2">
                        {[
                            "Roles y responsabilidades poco claras",
                            "Muy satisfecho/a",
                            "Satisfecho/a",
                            "Neutral",
                            "Insatisfecho/a",
                            "Muy insatisfecho/a",
                        ].map((opcion, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="pregunta6"
                                    value={opcion}
                                    onChange={(e) => setSelectedOption6(e.target.value)}
                                    className="hidden peer"
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{opcion}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Botón Siguiente */}
                <div className="flex items-center justify-center">
                    <button type="submit" className="flex items-center justify-center gap-4 mt-6 bg-[#2684FC] text-white rounded-full lg:w-36 h-11">
                        Siguiente <CgArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
}
