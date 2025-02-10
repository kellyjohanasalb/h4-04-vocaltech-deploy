import { useState } from "react";
import { PaperClipIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid"; // Si usas Heroicons
import { Paperclip, Send, Eye, ClipboardList } from "lucide-react";
export default function Formulario() {
  const [notasInternas, setNotasInternas] = useState("El lead necesita ayuda comunicacional de formar inmediata.Tambien podemos ofrecerte una solucion integral brincandole apoyo tecnologico para que contruya un MVP")
  const [message, setMessage] = useState("Hola Leandro. Vimos tus datos y queremos ayudarte. ¿Te gustaría agendar una reunión?"); // Definir estado para el mensaje
   const [formData, setFormData] = useState({
    comunicacion: [
      { id: "comunicarIdea", pregunta: "1. ¿Cómo describirías tu capacidad para comunicar tu idea?", respuesta: "necesito mucha ayuda" },
      { id: "importanciaComunicacion", pregunta: "2. ¿Qué tan importante consideras la comunicación efectiva en tu proceso de ventas?", respuesta: "es fundamental me interesa tu mejorarla " },
      { id: "seguridadValor", pregunta: "3. ¿Qué tan seguro/a te sientes al comunicar el valor de tu producto o servicio?", respuesta: "inseguro me cuesta estructurar un discurso convincente" },
      { id: "desafioCliente", pregunta: "4. ¿Cuál es tu principal desafío al comunicarte con un cliente potencial?", respuesta: "cerrar la venta de manera efectiva" },
      { id: "barreraVentas", pregunta: "5. ¿Cuál es la mayor barrera que enfrentas al vender tu producto o servicio?", respuesta: "falta de confianza en la marca" },
      { id: "impacto", pregunta: "6. ¿Como percibes el impacto de  la comunicacion y el liderazgo en el entorno laboral", respuesta: "Son importantes pero dependen del contexto y del equipo de trabajo" },
      {id:"liderazgo", pregunta:"7.¿Cual consideras que es tu mayor desafio en comunicacion y liderazgo",respuesta:"Inspirar y motivar a mi equipo a colaboradores"}
    ],
    pitch: [
      { id: "tienePitch", pregunta: "1. ¿Cuentas con un pitch efectivo y sientes que es necesario para tu negocio?", respuesta: "Si, pero necesitamos optimizarlo para captar mejor la atencion " },
      { id: "frecuenciaPitch", pregunta: "2. ¿Con qué frecuencia presentas tu negocio a clientes, inversores o aliados estratégicos?", respuesta: "Ocasionalmente(varias veces al año)" },
      { id: "preparadoPitch", pregunta: "3. ¿Qué tan preparado te sientes para presentar tu negocio en un pitch breve y convincente?", respuesta: "Algo preparado, pero podria mejorar" },
      { id: "etapaMVP", pregunta: "4. ¿En qué etapa se encuentra tu MVP?", respuesta: "idea inicial" },
      { id: "mejorasPitch", pregunta: "5. Si tuvieras que mejorar tu pitch, ¿qué de estos elementos incluirías?", respuesta: "" },
      { id: "claridadMensaje", pregunta: "Claridad en el mensaje", respuesta: "2" },
      { id: "impactoPersuasion", pregunta: "Impacto y persuasión", respuesta: "5" },
      { id: "presentacionVisual", pregunta: "Presentación visual", respuesta: "4" },
      { id: "seguridadConfianza", pregunta: "Seguridad y confianza al hablar", respuesta: "5" },
      { id: "desafiosPitch", pregunta: "6. ¿Cuáles han sido los principales desafíos al presentar tu proyecto a clientes o inversores?", respuesta: "Falta de seguridad" },
    ],
    mvp: [
      { id: "necesitaMVP", pregunta: "1. ¿Tu emprendimiento necesita desarrollar un MVP?", respuesta: "si" },
      { id: "etapaDesarrollo", pregunta: "2. ¿En qué etapa de desarrollo se encuentra tu MVP?", respuesta: "idea" },
      { id: "validacionIdea", pregunta: "3. ¿Cómo has validado tu idea hasta el momento?", respuesta: "Aun no he validado mi idea" },
      { id: "problemaMVP", pregunta: "4. ¿Cuál es el problema específico que tu MVP busca resolver?", respuesta: "Gestionar una app de trasnporte" },
      { id: "mayorDificultad", pregunta: "5. ¿Hasta ahora qué ha sido la mayor dificultad para tu MVP?", respuesta: "Desarollador Front end Desarrollador Back end" },
      { id: "impactoPerfiles", pregunta: "6. ¿Qué tan claro tienes el impacto que cada perfil tecnológico puede aportar al crecimiento de tu negocio?", respuesta: "Falta de conocimientos tecnicos " },
    ],
    talento: [
      { id: "buscaJunior", pregunta: "1. ¿Está tu emprendimiento actualmente en busca de incorporar talento Junior en tu equipo?", respuesta: "Si, pero aun no hemos definido un proceso claro" },
      { id: "cualidadesJunior", pregunta: "2. ¿Qué cualidades consideras más importantes al seleccionar talento Junior para tu equipo?", respuesta: "Productividad y capacidad de resolucion de problemas" },
      { id: "evaluacionJunior", pregunta: "3. ¿Qué tan importante es para ti que los candidatos Junior sean evaluados mediante simulaciones o hackatones?", respuesta: "No lo considero una prioridad" },
      { id: "verticalBusqueda", pregunta: "4. ¿Dentro de qué vertical tech estás buscando perfiles?", respuesta: "Desarroolo web" },
      { id: "rolBusqueda", pregunta: "5. ¿En qué rol?", respuesta: "Desarrollador Fromt end Desarrollador Back end " },
      { id: "desafiosContratacion", pregunta: "6. ¿Qué desafíos enfrentan actualmente en la contratación de talento Junior?", respuesta: "Evaluar sus habilidads interpersonales y su capacidad para trabajar en equipo" },
      { id: "vozHistoria", pregunta: "7. ¡Dale voz a tu historia!", respuesta: "" },
    ],
  });

  const handleChange = (category, id, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].map((item) =>
        item.id === id ? { ...item, respuesta: value } : item
      ),
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Cabecera */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <div className="flex items-center text-sm font-semibold text-gray-800">
          <ClipboardList className="w-4 h-4 mr-2" />
          Respuestas del Formulario:{" "}
          <span className="text-gray-600 ml-1">Innovación TI</span>
        </div>
        <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-600 text-sm">
          <Eye className="w-4 h-4 mr-1" /> Ver Lead
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primera columna: Comunicación */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Comunicación
          </h2>
          {formData.comunicacion.map(({ id, pregunta, respuesta }) => (
            <div key={id} className="mb-3">
              <label
                htmlFor={id}
                className="text-gray-600 font-medium block mb-1"
              >
                {pregunta}
              </label>
              <input
                type="text"
                id={id}
                value={respuesta}
                onChange={(e) =>
                  handleChange("comunicacion", id, e.target.value)
                }
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
          ))}
        </section>

        {/* Segunda columna: Pitch */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Pitch</h2>
          {formData.pitch.map(({ id, pregunta, respuesta }) => (
            <div key={id} className="mb-3">
              <label
                htmlFor={id}
                className="text-gray-600 font-medium block mb-1"
              >
                {pregunta}
              </label>
              <input
                type="text"
                id={id}
                value={respuesta}
                onChange={(e) => handleChange("pitch", id, e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
          ))}
        </section>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MVP */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">MVP</h2>
          {formData.mvp.map(({ id, pregunta, respuesta }) => (
            <div key={id} className="mb-3">
              <label
                htmlFor={id}
                className="text-gray-600 font-medium block mb-1"
              >
                {pregunta}
              </label>
              <input
                type="text"
                id={id}
                value={respuesta}
                onChange={(e) => handleChange("mvp", id, e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
          ))}
        </section>

        {/* Talento */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Talento</h2>
          {formData.talento.map(({ id, pregunta, respuesta }) => (
            <div key={id} className="mb-3">
              <label
                htmlFor={id}
                className="text-gray-600 font-medium block mb-1"
              >
                {pregunta}
              </label>
              <input
                type="text"
                id={id}
                value={respuesta}
                onChange={(e) => handleChange("talento", id, e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
          ))}
        </section>
      </div>

      {/* Notas Internas */}
      <div className="border border-gray-300 rounded-lg p-2 mb-4">
        <p className="text-xs font-semibold">Notas Internas</p>
        <textarea
          className="w-full mt-1 p-2 text-sm border-none focus:ring-0 resize-none bg-gray-100 rounded"
          rows="3"
          value={notasInternas}
          onChange={(e) => setNotasInternas(e.target.value)}
        />
      </div>

      {/* Mensaje */}
      <div>
        <p className="text-sm font-semibold mb-2">
          Mensaje: Envío de diagnóstico
        </p>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <button className="flex items-center text-sm text-gray-600 hover:text-gray-800 border border-gray-400 rounded-md px-3 py-1 hover:border-gray-600">
          <PaperClipIcon className="w-4 h-4 mr-1" /> Adjuntar archivo
        </button>

        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          <PaperAirplaneIcon className="w-4 h-4 mr-2" /> Enviar Diagnóstico
        </button>
      </div>
    </div>
  );
}
