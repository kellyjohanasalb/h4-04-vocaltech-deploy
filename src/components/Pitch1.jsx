import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormulario } from "./FormularioContext";
import { CgArrowRight } from "react-icons/cg";
import ProgresBar from "./ProgresBar";
import logo from "../assets/icons/VocalTech.png";


export default function Pitch1() {
    const { updateFormData } = useFormulario(); // Estado para guardar la opción seleccionada
    const navigate = useNavigate(); // Hook para la navegación
    const [pitch, setPitch] = useState({
        name: "",
        tiempo: "",
        redes: "",
        sector_actividad: "",
        etapa: "",
        categoria: "Emprendedor",
        respuestas: {
            comunicacion: {
                capacidad_comunicar: "",
                importancia_comunicacion_ventas: "",
                seguro_comunicar: "",
                principal_desafio: "",
                mayor_barrera: "",
                impacto_comunicacion_liderazgo: "",
                mayor_desafio: ""
            },
            pitch: {
                pitch: "",
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
            mvp: {
                desarrollar_mvp: "",
                etapa: "",
                validado: "",
                problema_mvp: "",
                mayor_dificultad: ""
            },
            talentos: {
                incoporar_talento: "",
                cualidades: "",
                candidatos_evaluados: "",
                vertical: "",
                rol: "",
                desafios: ""
            }
        },
        email: "",
        whatsapp: "",
       // capacidad_comunicar: "" // Para almacenar la respuesta de la pregunta 6
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPitch((prevState) => ({
            ...prevState,
            respuestas: {
                ...prevState.respuestas,
                pitch: {
                    ...prevState.respuestas.pitch,
                    [name]: value
                }
            }
        }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        updateFormData(pitch); // Actualiza el JSON global
        console.log("Datos guardados:", pitch);

        const respuestaPitch = pitch.respuestas.pitch.pitch

        // Redirige según la respuesta seleccionada en la pregunta 6
        if (respuestaPitch === "Sí, tenemos un pitch y es clave para nuestro crecimiento") {
            navigate("/mvpe1");
        } else if (respuestaPitch === "Sí, pero necesitamos optimizarlo para captar mejor la atención"
            || respuestaPitch === "No, pero creemos que sería útil desarrollarlo"
            || respuestaPitch === "No, y no lo consideramos una oportunidad") {
            navigate("/pitch2");
        } else {
            alert("Por favor, selecciona una opción.");
        }
    };

    const handleBackClick = () => {
        navigate("/form-emprendedor");
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
                onSubmit={handleNext} // Manejar el evento de envío del formulario
            >
                <div>
                    <label className="block text-lg font-semibold" htmlFor="">
                        1. ¿Cuentas con un pitch efectivo y sientes que es necesario para tu negocio? (presentación breve y persuasiva que se utiliza para promocionar un proyecto o vender un producto)
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Sí, tenemos un pitch y es clave para nuestro crecimiento",
                            "Sí, pero necesitamos optimizarlo para captar mejor la atención",
                            "No, pero creemos que sería útil desarrollarlo",
                            "No, y no lo consideramos una oportunidad"
                        ].map((option, index) => (
                            <label
                                htmlFor={`pitch-${index}`}
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    id={`pitch-${index}`}
                                    type="radio"
                                    name="pitch"
                                    value={option}
                                    className="hidden peer"
                                    onChange={handleChange} // Manejar el cambio de opción
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{option}</span>
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
