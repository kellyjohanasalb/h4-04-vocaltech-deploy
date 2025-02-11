import { useState } from "react";
import { CgArrowRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom"; // O cambiar según tu sistema de rutas.
import ProgresBar from "./ProgresBar";
import logo from "../assets/icons/VocalTech.png";

export default function MVP2() {
    const navigate = useNavigate(); // Para redirigir al componente /talento1
    const handleBackClick = () => {
        navigate("/mvp1");
    };
    const [formData, setFormData] = useState({
        claro: "",
        asesoramiento: "",
        etapa: "",
        reto: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si todas las respuestas están seleccionadas
        const allAnswered = Object.values(formData).every((value) => value !== "");
        if (!allAnswered) {
            alert("Por favor responde todas las preguntas antes de continuar.");
            return;
        }

        // Si todo está respondido, redirigir al componente /talento1
        navigate("/talento1");
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            <div>
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
                    src={logo}
                    alt="VocalTech"
                    className="lg:w-[328px] h-[54px]"
                />
            </header>
            {/* Progress Bar */}
            <div className="flex items-center justify-between w-full max-w-4xl mt-8">
                <ProgresBar />
            </div>
        </div>
            <form
                className="w-full max-w-4xl px-4 mt-20"
                onSubmit={handleSubmit}
            >
                {/* Pregunta 1 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        1.-¿Qué tan claro tienes el proceso para validar nuevas ideas de negocio antes de invertir en ellas?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Muy claro",
                            "Algo claro",
                            "Poco claro",
                            "No estoy seguro/a"
                        ].map((claro, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="claro"
                                    value={claro}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{claro}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 2 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        2.-¿Te interesaría recibir asesoramiento para diseñar, lanzar u optimizar un MVP?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Si",
                            "No",
                            "Tal véz más adelante"
                        ].map((asesoramiento, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="asesoramiento"
                                    value={asesoramiento}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{asesoramiento}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 3 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        3.-¿En qué etapa se encuentra tu MVP?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Idea inicial",
                            "Prototipo inicial",
                            "Producto validado con usuario",
                            "Producto listo para escalar"
                        ].map((etapa, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="etapa"
                                    value={etapa}
                                    className="hidden peer"
                                    onChange={handleInputChange}
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

                {/* Pregunta 4 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        4.-¿Cuál ha sido tu mayor reto en la construcción del MVP?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Financiamiento",
                            "Falta de conocimientos técnicos",
                            "Dificultad para encontrar un equipo adecuado",
                            "Validación de la idea"
                        ].map((reto, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="reto"
                                    value={reto}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{reto}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Botón Siguiente */}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 mt-6 bg-[#2684FC] text-white rounded-full lg:w-36 h-11"
                    >
                        Siguiente <CgArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
}
