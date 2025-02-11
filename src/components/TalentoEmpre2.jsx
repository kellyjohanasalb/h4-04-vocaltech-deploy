import { useState } from "react";
import { useNavigate } from "react-router-dom"; // O cambiar según tu sistema de rutas.
import ProgresBar from "./ProgresBar";
import { useFormulario } from "./FormularioContext";
import { MdOutlineFileUpload } from "react-icons/md";
import { GrDocumentSound } from "react-icons/gr";

export default function TalentoEmpre2() {
    const { formData, updateFormData } = useFormulario();
    const navigate = useNavigate();
    const [audioFile, setAudioFile] = useState(null);
    const [talentoEmpre2, setTalentoEmpre2] = useState({
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
                mayor_desafio: "",
            },
            pitch: {
                pitch: "",
                frecuencia_presenta: "",
                preparado_presentar: "",
                mejorar_pitch: {
                    claridad: 4,
                    impacto_persuacion: 4,
                    presentacion_visual: 4,
                    seguridad_confianza: 4,
                },
                principales_desafios: "",
            },
            mvp: {
                desarrollar_mvp: "",
                etapa: "",
                validado: "",
                problema_mvp: "",
                mayor_dificultad: "",
            },
            talentos: {
                incoporar_talento: "",
                cualidades: "",
                candidatos_evaluados: "",
                vertical: "",
                rol: "",
                desafios: "",
            },
        },
        email: "",
        whatsapp: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTalentoEmpre2((prevState) => ({
            ...prevState,
            respuestas: {
                ...prevState.respuestas,
                talentos: {
                    ...prevState.respuestas.talentos,
                    [name]: value,
                },
            },
        }));
    };

    const handleAudioChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAudioFile(file);
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (!talentoEmpre2.respuestas.talentos.cualidades || 
            !talentoEmpre2.respuestas.talentos.candidatos_evaluados || 
            !talentoEmpre2.respuestas.talentos.vertical || 
            !talentoEmpre2.respuestas.talentos.rol || 
            !talentoEmpre2.respuestas.talentos.desafios) {
            alert("Por favor, completa todos los campos antes de continuar.");
            return;
        }
        updateFormData({ ...talentoEmpre2, audioFile });
        navigate("/fin-empre");
    };

    const handleBackClick = () => {
        navigate("/talento-empre1");
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("https://vocaltech-api-gateway-production.up.railway.app/api/users/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Formulario enviado con éxito");
            } else {
                alert("Error al enviar el formulario");
            }
        } catch (error) {
            console.error("Error al enviar:", error);
        }
    };

    const handleButtonClick = async () => {
        try {
            await handleSubmit();
            navigate("/formulario-terminado");
        } catch (error) {
            console.error("Error al guardar los datos:", error);
            alert("Hubo un error al guardar los datos.");
        }
    }




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
            <form
                className="w-full max-w-4xl px-4 mt-20"
                onSubmit={handleNext}
            >
                {/* Pregunta 2 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        2. ¿Qué cualidades consideras más importantes al seleccionar talento Junior para tu equipo?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Actitud positiva, capacidad de trabajo en equipo y comunicación efectiva",
                            "Productividad y capacidad de resolución de problemas",
                            "Conocimientos técnicos especificos para el puesto",
                            "No tenemos una preferencia especifica, lo evaluamos todo en conjunto",
                        ].map((cualidades, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="cualidades"
                                    value={cualidades}
                                    checked={talentoEmpre2.respuestas.talentos.cualidades === cualidades}
                                    onChange={handleChange}
                                    className="hidden peer"

                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{cualidades}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 3 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        3. ¿Qué tan importante es para ti que los candidatos Junior sean evaluados mediante simulaciones o hackatones que midan su comportamiento y habilidades en tiempo real?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Muy importante, preferimos evaluar como se desempeña en situaciones reales de trabajo",
                            "Importante, pero también consideramos otros metodos de evaluación tradicionales",
                            "No lo considero una prioridad, prefiero centrarnos solo en entrevistas y pruebas técnicas",
                            "No creo que sea necesario, buscamos solo candidatos con experiencia previa"
                        ].map((candidatos_evaluados, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="candidatos_evaluados"
                                    value={candidatos_evaluados}
                                    checked={talentoEmpre2.respuestas.talentos.candidatos_evaluados === candidatos_evaluados}
                                    onChange={handleChange}
                                    className="hidden peer"

                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{candidatos_evaluados}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 4 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        4. ¿Dentro de que vertical tech estas buscando perfiles?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "No-Code",
                            "Desarrollo Web",
                            "Data - Bi",
                            "Mobile"
                        ].map((vertical, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="vertical"
                                    value={vertical}
                                    checked={talentoEmpre2.respuestas.talentos.vertical === vertical}
                                    onChange={handleChange}
                                    className="hidden peer"

                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{vertical}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 5 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        5. ¿En que rol?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Desarrollo Front-end",
                            "Desarrollo Back-end",
                            "Desarrollo No-Code",
                            "Diseñador UX/UI",
                            "Data",
                            "QA",
                            "Proyect Manager",
                            "Team Leader",
                            "Product Owner",
                            "Otro"
                        ].map((rol, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="rol"
                                    value={rol}
                                    checked={talentoEmpre2.respuestas.talentos.rol === rol}
                                    onChange={handleChange}
                                    className="hidden peer"

                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{rol}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Pregunta 6 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        6. ¿Qué desafíos enfrentan actualmente en la contratación de talento Junior?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Evaluar sus habilidades interpersonales y su capacidad para trabajar en equipo",
                            "Medir su productividad y como se adaptan al entorno laboral",
                            "Encontrar candidatos que tengan las habilidades técnicas necesarias sin mucha experiencia ",
                            "No encontramos dificultades específicas, pero necesitamos un proceso de selección más eficiente"
                        ].map((desafios, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="desafios"
                                    value={desafios}
                                    checked={talentoEmpre2.respuestas.talentos.desafios === desafios}
                                    onChange={handleChange}
                                    className="hidden peer"

                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{desafios}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Apartado 7: ¡Dale voz a tu historia! */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">7. ¡Dale voz a tu historia!</label>
                    <p className="text-[#9A9A9A]">Queremos conocerte mejor. Si lo deseas puedes grabar un audio corto
                        (30-60 segundos) contándonos sobre ti, tus objetivos y cómo podemos
                        ayudarte.
                    </p>
                    <div className="mt-4">
                        <input type="file" accept="audio/*" className="hidden" id="audioInput" onChange={handleAudioChange} />
                        <button
                            type="button"
                            onClick={() => document.getElementById("audioInput").click()}
                            className="flex items-center justify-center gap-2 px-4 py-2 text-black border border-black rounded-md"
                        >
                            <MdOutlineFileUpload className="w-[20px] h-[20px]" /> Adjuntar archivo de audio
                        </button>
                        {audioFile && (
                            <div className="flex items-center gap-4 mt-4">
                                <span className="flex items-center gap-2 text-blue-500"> <GrDocumentSound className="text-black" />{audioFile.name}</span>
                                <audio controls>
                                    <source src={URL.createObjectURL(audioFile)} type={audioFile.type} />
                                    Tu navegador no soporta la reproducción de audio.
                                </audio>
                            </div>
                        )}
                    </div>
                </div>
            </form>
            {/* Footer*/}
            <div className="w-full h-full  flex items-center justify-center min-h-screen bg-gradient-to-b from-[#525AF3] to-[#0B0B0BF7]">
                <div className="w-full h-full max-w-md p-8 text-center ">

                    {/* Título */}
                    <h1 className="mb-2 text-2xl font-bold text-white">
                        ¿Listo para conocer tu diagnóstico?
                    </h1>

                    {/* Subtítulo */}
                    <p className="mb-6 text-sm leading-relaxed text-white">
                        Completa tus datos de contacto y en breve recibirás un diagnóstico personalizado que se ajuste a tus necesidades.
                    </p>

                    {/* Formulario */}
                    <form className="space-y-4">
                        {/* Campo de correo electrónico */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-left text-white">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Campo de celular */}
                        <div>
                            <label htmlFor="celular" className="block mb-2 text-sm text-left text-white">
                                Celular*
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    id="code"
                                    placeholder="+"
                                    className="w-16 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="tel"
                                    id="celular"
                                    placeholder="911111111"
                                    className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        {/* Botón de enviar */}
                        <button
                            className="mt-0 w-full flex justify-center items-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] text-[#F8F8F8] font-semibold text-[18px] leading-normal shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] bg-[length:200%_200%] hover:animate-gradientMove whitespace-nowrap"
                            onClick={handleButtonClick}
                        >
                            Obtener mi diagnóstico gratis
                        </button>
                    </form>

                    {/* Información adicional */}
                    <p className="mt-6 text-xs leading-relaxed text-white">
                        Queremos asegurarte que tus datos están seguros con nosotros. Al enviar este formulario, nos das permiso para enviarte un diagnóstico personalizado y ponernos en contacto contigo. Para más información, revisa nuestros <span className="underline">Términos y Condiciones</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}
