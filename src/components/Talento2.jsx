import { useState } from "react";
import { useNavigate } from "react-router-dom"; // O cambiar según tu sistema de rutas.
import ProgresBar from "./ProgresBar";

export default function Talento2() {
  const navigate = useNavigate(); // Para redirigir al componente /talento1
  const handleBackClick = () => {
    navigate("/talento1");
};
  const [formData, setFormData] = useState({
    desafio: "",
    definido: "",
    talento: "",
    roles: "",
    perfil: "",
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
        onSubmit={handleSubmit}
      >
        {/* Pregunta 1 */}
        <div className="mb-6">
          <label className="block text-lg font-semibold">
            1. ¿Cuál es el mayor desafío que enfrentas al contratar talento para tu equipo?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Falta de candidatos calificados",
              "Proceso largo de selección",
              "Retención de talento",
              "Definición de roles",
              "Otro"
            ].map((desafio, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="desafio"
                  value={desafio}
                  className="hidden peer"
                  onChange={handleInputChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{desafio}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Pregunta 2 */}
        <div className="mb-6">
          <label className="block text-lg font-semibold">
            2. ¿Qué tan definido está el perfil de los roles clave que necesitas cubrir actualmente?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Totalmente definido",
              "Algo definido",
              "Poco definido",
              "No estoy seguro/a"
            ].map((definido, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="definido"
                  value={definido}
                  className="hidden peer"
                  onChange={handleInputChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{definido}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Pregunta 3 */}
        <div className="mb-6">
          <label className="block text-lg font-semibold">
            3. ¿Te interesaría un acompañamiento especializado para identificar y atraer talento adecuado, especialmente en roles de IT u otros estratégicos?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Si",
              "No",
              "Tal véz"
            ].map((talento, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="talento"
                  value={talento}
                  className="hidden peer"
                  onChange={handleInputChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{talento}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Pregunta 4 */}
        <div className="mb-6">
          <label className="block text-lg font-semibold">
            4. ¿Qué roles tecnológicos estás buscando actualmente o creés que serán clave para tu empresa en el corto plazo?
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
            ].map((roles, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="roles"
                  value={roles}
                  className="hidden peer"
                  onChange={handleInputChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{roles}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Pregunta 5 */}
        <div className="mb-6">
          <label className="block text-lg font-semibold">
            5. ¿Qué tan claro tienes el impacto que cada perfil tecnológico puede aportar al crecimiento de tu negocio?
          </label>
          <div className="mt-4 space-y-2">
            {[
              "Muy claro",
              "Algo claro",
              "Poco claro",
              "No estoy seguro/a  "
            ].map((perfil, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="perfil"
                  value={perfil}
                  className="hidden peer"
                  onChange={handleInputChange}
                />
                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                  <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-black">{perfil}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Apartado 6: ¡Dale voz a tu historia! */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">6.¡Dale voz a tu historia!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Queremos conocerte mejor. Si lo deseas, puedes grabar un audio corto (30-60 segundos) contándonos sobre ti, tus objetivos y cómo podemos ayudarte.
          </p>
          <div className="mt-4">
            <label
              htmlFor="audio-upload"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              📁 Adjuntar archivo de audio
              <input
                type="file"
                id="audio-upload"
                accept="audio/*"
                className="hidden"
              />
            </label>
            <div className="mt-3">
              <a
                href="#"
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
              </a>
              <button
                type="button"
                className="ml-2 text-gray-500 hover:text-red-500 focus:outline-none"
              >
              
              </button>
            </div>
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
              onClick={() => {
                navigate("/formulario-terminado"); // Ruta actualizada
              }}
            >
              Obtener Diagnóstico Gratis
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
