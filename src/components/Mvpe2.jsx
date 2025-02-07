import { useState } from "react";
import { CgArrowRight } from "react-icons/cg";
import ProgresBar from "./ProgresBar";
import { useNavigate } from "react-router-dom";

export default function Mvpe2() {
    const [formData, setFormData] = useState({
        importante: "",
        seguro: "",
        desafio: "",
        barrera: "",
    });
    const [isFormValid, setIsFormValid] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const navigate = useNavigate();
        const handleBackClick = () => {
            navigate("/mvpe1");
        };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que todas las preguntas están contestadas
        if (formData.importante && formData.seguro &&
            formData.desafio && formData.barrera) {
            // Aquí puedes realizar alguna acción adicional, como redirigir o limpiar el formulario
            window.location.href = "/talento-empre1"; // Redirige a /pitch1
        } else {
            // Si no están todas contestadas, mostrar un error
            setIsFormValid(false);
            alert("Por favor, responde todas las preguntas antes de continuar.");
        }
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
                    src="/VocalTech.png"
                    alt="VocalTech"
                    className="lg:w-[328px] h-[54px]"
                />
            </header>
            {/* Progress Bar */}
            <div className="flex items-center justify-between w-full max-w-4xl mt-8">
                <ProgresBar />
            </div>
        </div>
            <form className="w-full max-w-4xl px-4 mt-20" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-lg font-semibold" >
                        2. ¿En qué etapa de desarrollo se encuentra tu MVP?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Idea",
                            "Prototipo funcional",
                            "Producto validado con usuarios",
                            "Producto listo para escalar",
                            "Otro"
                        ].map((importante, index) => (
                            <label 
                            key={index}
                            className="flex items-center gap-2 cursor-pointer">
                                <input 
                                type="radio"
                                name="importante"
                                value={importante}
                                className="hidden peer"
                                checked={formData.importante === importante }
                                onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{importante}</span>
                        </label>
                        ))}

                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        3. ¿Cómo has validado tu idea hasta el momento?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Encuestas o entrevistas con clientes potenciales",
                            "Desarrollo de prototipos y pruebas de usuario",
                            "Lanzamiento de una versión inicial al mercado",
                            "Aún no he validado mi idea",
                            "Otro"
                        ].map((seguro, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="seguro"
                                    value={seguro}
                                    className="hidden peer"
                                    checked={formData.seguro === seguro}
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{seguro}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                <label className="block text-lg font-semibold" htmlFor="desafio">
                        4. ¿Cuál es el problema específico que tu MVP busca resolver?
                    </label>
                    <input
                        id="desafio"
                        name="desafio"
                        type="text"
                        placeholder="Ej. Problema específico"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                        value={formData.desafio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold" htmlFor="barrera">
                        5. ¿Hasta ahora que ha sido la mayor dificultad para tu MVP ?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Falta de financiamiento",
                            "Falta de conocimiento técnicos",
                            "Dificultad para encontrar un equipo adecuado",
                            "No saber cómo validar la idea",
                            "Otro"
                        ].map((barrera, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    name="barrera"
                                    type="radio"
                                    value={barrera}
                                    className="hidden peer"
                                    checked={formData.barrera === barrera}
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{barrera}</span>
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
