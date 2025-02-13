import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import Header from "./Header";
import { useFormulario } from "./FormularioContext";

export default function FormEmpresaNavi() {
    //const { updateFormData } = useFormulario();
    const navigate = useNavigate();
    const [empre, setEmpre] = useState({
        name: "",
        ubicacion: "",
        redes: "",
        sector_actividad: "",
        empleados: "",
        satisfecho: "",
        categoria: "Empresa",
        });
    const handleChange = (e) => {
        setEmpre({ ...empre, [e.target.name]: e.target.value });
    };

    const handleNext = (e) => {
        e.preventDefault();
        updateFormData(empre); // Actualiza el JSON global
        console.log("Datos guardados:", empre);

        if (empre.satisfecho ===  "Satisfecho/a" || empre.satisfecho === "Muy satisfecho/a") {
            navigate("/mvp1"); // Navegar a MVP1
        } else if (
            empre.satisfecho === "Neutral" ||
            empre.satisfecho === "Insatisfecho/a" ||
            empre.satisfecho === "Muy insatisfecho/a"
        ) {
            navigate("/comunicacion1"); // Navegar a Comunicacion1
        } else {
            alert("Por favor, seleccione todas las opciones .");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            {/* Header */}
            <Header />    
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
            <form className="w-full max-w-4xl px-4 mt-8" onSubmit={handleNext}>
                {/* Preguntas anteriores */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-semibold">
                        1. Nombre de tu Empresa
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Nombre de tu empresa"
                        onChange={handleChange}
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
                        name="ubicacion"
                        placeholder="Ubicación de tu empresa"
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="redes" className="block text-lg font-semibold">
                        3. Redes Sociales / Sitio Web
                    </label>
                    <input
                        id="redes"
                        type="text"
                        name="redes"
                        placeholder="Redes / Sitio web de tu emprendimiento"
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="sector_actividad" className="block text-lg font-semibold">
                        4. Sector de Actividad
                    </label>
                    <input
                        id="sector_actividad"
                        type="text"
                        name="sector_actividad"
                        placeholder="Ej. Tecnológico Comercial"
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        5. ¿Número de Empleados?
                    </label>
                    <div className="mt-4 space-y-2">
                        {["de 1 a 10", "de 11 a 50", "de 51 a 99", "más de 100"].map((empleados, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="empleados"
                                    value={empleados}
                                    onChange={handleChange}
                                    className="hidden peer"
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{empleados}</span>
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
                            "Muy satisfecho/a",
                            "Satisfecho/a",
                            "Neutral",
                            "Insatisfecho/a",
                            "Muy insatisfecho/a",
                        ].map((satisfecho, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="satisfecho"
                                    value={satisfecho}
                                    onChange={handleChange}
                                    className="hidden peer"
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{satisfecho}</span>
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
