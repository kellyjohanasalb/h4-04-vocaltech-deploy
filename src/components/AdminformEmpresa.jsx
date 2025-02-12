import { useState } from "react";
import { PaperClipIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid"; // Si usas Heroicons
import { Paperclip, Send, Eye, ClipboardList } from "lucide-react";
export default function Formularioempresa() {
  const [notasInternas, setNotasInternas] = useState("El lead necesita ayuda comunicacional de formar inmediata.Tambien podemos ofrecerte una solucion integral brincandole apoyo tecnologico para que contruya un MVP")
  const [message, setMessage] = useState("Hola Leandro. Vimos tus datos y queremos ayudarte. ¿Te gustaría agendar una reunión?"); // Definir estado para el mensaje
   const [formData, setFormData] = useState({
    comunicacion: [
      { id: "comunicarIdea", pregunta: "1. ¿Qué tan satisfecho/a estas con la comunicacion interna dentro de tu equipo?", respuesta: "Neutral" },
      { id: "importanciaComunicacion", pregunta: "2. ¿Qué desafios principales enfrenta tu equipo en terminos de liderazgo y motivacion", respuesta: "Falta liderazgo " },
      { id: "seguridadValor", pregunta: "3. ¿Consideras que tu equipo necesita mejorar habilidades blandas como resolucion de conflictos,comunicacion asertiva, liderazgo o trabajo en equipo?", respuesta: "Si" },
      { id: "desafioCliente", pregunta: "4. ¿Que impacto esperas lograr si mejoras la comunicacion, el lierazgo y la gestion de tu equipo?", respuesta: "Mejorar el trabajo del equipo y alcanzar metas" },
      
    ],
    
    mvp: [
      { id: "necesitaMVP", pregunta: "1. ¿Tu emprensa necesita desarrollar un MVP?", respuesta: "si" },
      { id: "etapaDesarrollo", pregunta: "2. ¿Que tan claro tienes el proceso para validar nuevas ideas de negocio antes de revertir en ellas?", respuesta: "Poco claro" },
      { id: "validacionIdea", pregunta: "3. ¿Te interesaria recibir asesoramientos para diseñar, lanzar u optimizar un MVP?", respuesta: "Si" },
      { id: "problemaMVP", pregunta: "4. ¿En que etapa se encuentra tu MVP?", respuesta: "idea inicial" },
      { id: "mayorDificultad", pregunta: "5. ¿Cual ha sido tu mayor reto en la construccion del MVP?", respuesta: "Falta de conocimientos tecnicos" },
    
    ],

      
    talento: [
      { id: "buscaJunior", pregunta: "1. ¿Tu empresa esta buscando nuevo talento?", respuesta: "Si" },
      { id: "cualidadesJunior", pregunta: "2. ¿Cual es el mayor desafio que enfrentas al contratar talento para tu equipo?", respuesta: "Falta de candidatos calificados" },
      { id: "evaluacionJunior", pregunta: "3. ¿Que tan definido esta el perfil de los roles clave que necesitas cubiri actualmente?", respuesta: "Poco definido" },
      { id: "verticalBusqueda", pregunta: "4. ¿Te interesaria un acompañamiento especializado para identificar y atraer talento adecuado especialmente en roles de it u otros estrategicos?", respuesta: "idea inicial" },
      { id: "rolBusqueda", pregunta: "5. ¿Qué roles tecnologicos estas buscando actualmente o crees que seran clave para tu empresa en el corto plazo?", respuesta: "Desarrollador Fromt-end Desarrollador Back-end " },
      { id: "desafiosContratacion", pregunta: "6. ¿Qué tan claro tenes el impacto que cada perfil tecnologico puede aportar al crecimiento de tu negocio?", respuesta: "Poco claro" },
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

        {/* Segunda columna: MVP */}
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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