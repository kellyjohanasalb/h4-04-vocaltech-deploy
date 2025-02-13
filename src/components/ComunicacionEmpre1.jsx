import { useState } from "react";
import { useFormulario } from "./FormularioContext";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import ProgresBar from "./ProgresBar";

export default function ComunicacionEmpre1() {
  const { updateFormData } = useFormulario();
  const navigate = useNavigate();
  const [comunicacionEm, setComunicacionEm] = useState({
    respuestas: {
      comunicacion: {
        importancia_comunicacion_ventas: "",
        seguro_comunicar: "",
        principal_desafio: "",
        mayor_barrera: "",
        impacto_comunicacion_liderazgo: "",
        mayor_desafio: "",
      },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComunicacionEm((prevState) => ({
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
    updateFormData(comunicacionEm);
    console.log("Datos guardados:", comunicacionEm);

    const importancia_comunicacion_ventas = comunicacionEm.respuestas.comunicacion.importancia_comunicacion_ventas;
    const seguro_comunicar = comunicacionEm.respuestas.comunicacion.seguro_comunicar;
    const principal_desafio = comunicacionEm.respuestas.comunicacion.principal_desafio;
    const mayor_barrera = comunicacionEm.respuestas.comunicacion.mayor_barrera;
    const impacto_comunicacion_liderazgo = comunicacionEm.respuestas.comunicacion.impacto_comunicacion_liderazgo;
    const mayor_desafio = comunicacionEm.respuestas.comunicacion.mayor_desafio;
    
    if (
      importancia_comunicacion_ventas &&
      seguro_comunicar &&
      principal_desafio &&
      mayor_barrera &&
      impacto_comunicacion_liderazgo &&
      mayor_desafio
    ) {
      navigate("/pitch1");
    } else {
      alert("Por favor, responde todas las preguntas antes de continuar.");
    }
  };

  const handleBackClick = () => {
    navigate("/form-emprendedor");
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8 bg-white">
      <div>
        <header className="flex items-center justify-center w-full max-w-4xl px-4">
          <button
            onClick={handleBackClick}
            className="absolute flex items-center gap-4 text-lg font-medium text-black lg:left-36 max-lg:left-72"
          >
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
      <form className="w-full max-w-4xl px-4 mt-20" onSubmit={handleNext}>
        <div className="mb-6">
          <label className="block text-lg font-semibold">
            1. ¿Qué tan importante consideras la comunicación efectiva en tu
            proceso de ventas?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Es fundamental, me interesa mejorarla",
              "Es importante, pero no es mi prioridad en este momento",
              "No le doy mucha importancia, mis ventas funcionan bien sin enfocarme en esto.",
            ].map((importancia_comunicacion_ventas, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="importancia_comunicacion_ventas"
                  value={importancia_comunicacion_ventas}
                  checked={
                    comunicacionEm.respuestas.comunicacion.importancia_comunicacion_ventas ===
                    importancia_comunicacion_ventas
                  }
                  onChange={handleChange}
                  className="hidden peer"
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">
                  {importancia_comunicacion_ventas}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold">
            2. ¿Qué tan seguro/a te sientes al comunicar el valor de tu producto
            o servicio?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Muy seguro/a, sé exactamente cómo transmitir el valor de mi oferta",
              "Seguro/a, pero a veces siento que mi mensaje podría mejorar",
              "Inseguro/a, me cuesta estructurar un discurso convincente",
              "Muy inseguro/a, necesito mejorar mucho en este aspecto",
            ].map((seguro_comunicar, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="seguro_comunicar"
                  value={seguro_comunicar}
                  className="hidden peer"
                  checked={
                    comunicacionEm.respuestas.comunicacion.seguro_comunicar ===
                    seguro_comunicar
                  }
                  onChange={handleChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{seguro_comunicar}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold" htmlFor="principal">
            3. ¿Cuál es tu principal desafío al comunicarte con un cliente
            potencial?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Captar su interés desde el inicio",
              "Explicar claramente el valor de mi oferta",
              "Maneja objeciones y responde preguntas dificiles",
              "Cerrar la venta de manera efectiva",
              "No tengo dificultades en la comunicación",
            ].map((principal_desafio, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  id="principal_desafio"
                  name="principal_desafio"
                  type="radio"
                  value={principal_desafio}
                  className="hidden peer"
                  checked={
                    comunicacionEm.respuestas.comunicacion.principal_desafio === principal_desafio
                  }
                  onChange={handleChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{principal_desafio}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold" htmlFor="barrera">
            4. ¿Cuál es la mayor barrera que enfrentas al vender tu producto o
            servicio?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Falta de confianza en la marca",
              "Competencia en el mercado",
              "Dificultad para llegar al cliente ideal",
              "Falta de habilidades de venta",
            ].map((mayor_barrera, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  id="mayor_barrera"
                  name="mayor_barrera"
                  type="radio"
                  value={mayor_barrera}
                  className="hidden peer"
                  checked={comunicacionEm.respuestas.comunicacion.mayor_barrera === mayor_barrera}
                  onChange={handleChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{mayor_barrera}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold" htmlFor="laboral">
            5. ¿Cómo percibes el impacto de la comunicación y el liderazgo en el
            entorno laboral?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Son habilidades clave que siempre se pueden mejorar y desarrollar",
              "Son importantes, pero dependen del contexto y del equipo de trabajo",
              "Influyen en algunos aspectos, aun que no siempre son determinantes",
              "No son un factor clave en mi día a día laboral",
            ].map((impacto_comunicacion_liderazgo, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  id="impacto_comunicacion_liderazgo"
                  name="impacto_comunicacion_liderazgo"
                  type="radio"
                  value={impacto_comunicacion_liderazgo}
                  className="hidden peer"
                  checked={
                    comunicacionEm.respuestas.comunicacion.impacto_comunicacion_liderazgo ===
                    impacto_comunicacion_liderazgo
                  }
                  onChange={handleChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">
                  {impacto_comunicacion_liderazgo}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold" htmlFor="liderazgo">
            6. ¿Cuál consideras que es tu mayor desafío en comunicación y
            liderazgo?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Expresar mis ideas con claridad y persuasión",
              "Manejar conflictos y dar feedback sin generar tensiones",
              "Inspirar y motivar a mi equipo o colaboradores",
              "No tengo dificultades significativas en este aspecto",
            ].map((mayor_desafio, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  id="mayor_desafio"
                  name="mayor_desafio"
                  type="radio"
                  value={mayor_desafio}
                  className="hidden peer"
                  checked={comunicacionEm.respuestas.comunicacion.mayor_desafio === mayor_desafio}
                  onChange={handleChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{mayor_desafio}</span>
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
