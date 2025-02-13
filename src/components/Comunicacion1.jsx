import { useState } from "react";
import Header from "./Header";
import { CgArrowRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Comunicacion1() {
    const navigate = useNavigate();
    const [comunicacion1, setComunicacion1] = useState({
        respuestas: {
            comunicacion: {
                desafios: "",
                mejorar_habilidades: "",
                impacto: ""
            },
        },
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setComunicacion1((prevState) => ({
            ...prevState,
            respuestas: {
                ...prevState.respuestas,
                comunicacion: {
                    ...prevState.respuestas.comunicacion,
                    [name]: value,
                },
            },
        }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        updateFormData(comunicacion1);
        console.log("Datos guardados:", comunicacion1);

        // Validar que todas las preguntas están contestadas
        if (comunicacion1.respuestas.comunicacion.desafios && comunicacion1.respuestas.comunicacion.mejorar_habilidades && comunicacion1.respuestas.comunicacion.impacto) {
            // Si todas las respuestas están completas, mostrar un mensaje de éxito
            // Aquí puedes realizar alguna acción adicional, como redirigir o limpiar el formulario
            navigate("/mvp1"); // Redirige a /comunicacion-empre1
        } else {
            // Si no están todas contestadas, mostrar un error
            alert("Por favor, responde todas las preguntas antes de continuar.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            <Header />
            <form className="w-full max-w-4xl px-4 mt-20" onSubmit={handleNext}>
                <div className="mb-6">
                    <label className="block text-lg font-semibold" htmlFor="desafio">
                        1. ¿Qué desafíos principales enfrenta tu equipo en términos de liderazgo y motivación?
                    </label>
                    <input
                        id="desafio"
                        name="desafio"
                        type="text"
                        placeholder="Desafíos en liderazgo y motivación"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        2. ¿Consideras que tu equipo necesita mejorar habilidades blandas como resolución de conflictos, comunicación asertiva, liderazgo o trabajo en equipo?
                    </label>
                    <div className="mt-4 space-y-2">
                        {["Si", "No", "No estoy seguro/a"].map((mejorar_habilidades, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="mejorar_habilidades"
                                    value={mejorar_habilidades}
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{mejorar_habilidades}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-lg font-semibold" htmlFor="impacto">
                        3. ¿Qué impacto esperas lograr si mejoras la comunicación, el liderazgo y la gestión de tu equipo?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Mayor productividad",
                            "Mejora del clima laboral",
                            "Reducción de rotación",
                            "Mejora en la calidad del producto/servicio",
                            "Otro",
                        ].map((impacto, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    name="impacto"
                                    type="radio"
                                    value={impacto}
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{impacto}</span>
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
