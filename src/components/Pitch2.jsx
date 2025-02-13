import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormulario } from "./FormularioContext";
import { CgArrowRight } from "react-icons/cg";
import ProgresBar from "./ProgresBar";
import logo from "../assets/icons/VocalTech.png";




export default function Pitch2() {
    const { updateFormData } = useFormulario(); // Estado para guardar la opción seleccionada
        const navigate = useNavigate(); // Hook para la navegación
        const [pitch2, setPitch2] = useState({
            respuestas: {
            pitch: {
                frecuencia_presenta: "",
                preparado_presentar: "",
                mejorar_pitch: {
                    claridad: 4,
                    impacto_persuacion: 4,
                    presentacion_visual: 4,
                    seguridad_confianza: 4
                },
                principales_desafios: ""
            },
        },
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
        
            setPitch2(prevState => {
                let updatedState = { ...prevState };
        
                if (["claridad", "impacto_persuacion", "presentacion_visual", "seguridad_confianza"].includes(name)) {
                    updatedState.respuestas.pitch.mejorar_pitch = {
                        ...updatedState.respuestas.pitch.mejorar_pitch,
                        [name]: parseInt(value, 10)
                    };
                } else if (["frecuencia_presenta", "preparado_presentar", "principales_desafios"].includes(name)) {
                    updatedState.respuestas.pitch = {
                        ...updatedState.respuestas.pitch,
                        [name]: value
                    };
                } else {
                    updatedState[name] = value;
                }
        
                return updatedState;
            });
        };
        

        const handleNext = (e) => {
            e.preventDefault();
            updateFormData(pitch2);
            console.log("Datos guardados:", pitch2);
        
            const { frecuencia_presenta, preparado_presentar, mejorar_pitch, principales_desafios } = pitch2.respuestas.pitch;
            
            if (frecuencia_presenta && preparado_presentar && mejorar_pitch.claridad
                && mejorar_pitch.impacto_persuacion && mejorar_pitch.presentacion_visual
                && mejorar_pitch.seguridad_confianza && principales_desafios) {
                navigate("/mvpe1");
            } else {
                alert("Por favor, complete todos los campos antes de continuar.");
            }
        };

        const handleBackClick = () => {
            navigate("/pitch1");
        };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            {/* Header */}
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
            {/* Form */}
            <form className="w-full max-w-4xl px-4 mt-8" onSubmit={handleNext}>
                <div>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold">
                            2. ¿Con qué frecuencia presentas tu negocio a clientes, inversores o aliados estratégicos?
                        </label>
                        <div className="mt-4 space-y-2">
                            {[
                                "Frecuentemente (al menos una vez al mes)",
                                "Ocasionalmente (varias veces al año)",
                                "Rara vez (menos de una vez al año)",
                                "Nunca lo he hecho",
                            ].map((frecuencia_presenta, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    {/* El input y su contenido están en el mismo label */}
                                    <input
                                        type="radio"
                                        name="frecuencia_presenta"
                                        value={frecuencia_presenta}
                                        className="hidden peer"
                                        checked={pitch2.respuestas.pitch.frecuencia_presenta === frecuencia_presenta}
                                        onChange={handleChange}
                                    />
                                    <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                        <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                    </div>
                                    <span className="text-black">{frecuencia_presenta}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">
                                3. ¿Qué tan preparado te sientes para presentar tu negocio en un pitch breve y convincente?
                            </h2>
                            <div className="mt-4 space-y-2">
                                {[
                                    "Totalmente preparado, tengo un pitch sólido",
                                    "Algo preparado, pero podría mejorar",
                                    "No muy preparado, me cuesta estructurar un mensaje claro",
                                    "Nada preparado, no tengo un pitch definido",
                                ].map((preparado_presentar, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="preparado_presentar"
                                            value={preparado_presentar}
                                            className="hidden peer"
                                            checked={pitch2.respuestas.pitch.preparado_presentar === preparado_presentar}
                                            onChange={handleChange}
                                        />
                                        <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                            <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="text-black">{preparado_presentar}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <label className="text-lg font-semibold">4. Si tuvieras que mejorar tu pitch, ¿Qué de estos elementos incluyes en tu pitch? cuantifícalo</label>
                            <form className="mt-4 space-y-6">
                                {/* Claridad de los objetivos organizacionales */}
                                <div>
                                    <label className="block ">
                                        Claridad en el mensaje
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`claridad-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`claridad-${value}`}
                                                    name="claridad"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* */}
                                <div>
                                    <label htmlFor="" className="block ">
                                        Impacto y persuasión
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`impacto_persuacion-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`impacto_persuacion-${value}`}
                                                    name="impacto_persuacion"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* */}
                                <div>
                                    <label className="block ">
                                        Presentación visual (diapositivas, material de apoyo)
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`presentacion_visual-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`presentacion_visual-${value}`}
                                                    name="presentacion_visual"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* */}
                                <div>
                                    <label htmlFor="" className="block ">
                                        Seguridad y confianza al hablar
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`seguridad_confianza-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`seguridad_confianza-${value}`}
                                                    name="seguridad_confianza"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <div className="mb-6">
                            <label htmlFor="principales_desafios" className="block text-lg font-semibold">
                                5. ¿Cuáles han sido los principales desafíos al presentar tu proyecto a clientes o inversores?
                            </label>
                            <input
                                id="principales_desafios"
                                name="principales_desafios"
                                type="text"
                                placeholder="Describe aquí"
                                onChange={handleChange}
                                className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                                
                            />
                        </div>
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

