import vos from "../assets/icons/Default-vos.png";
import country from "../assets/icons/Default.png";
import mujer from "../assets/images/image-1.png";
import frameAzul from "../assets/icons/Frame.png";
import frameMorado from "../assets/icons/Frame (1).png";

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-16 px-8 relative flex flex-col items-center">
      {/* Sección del Título */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        Juntos, impulsamos tu crecimiento
      </h2>

      <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-12">
        {/* Imagen de la chica */}
        <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img src={mujer} alt="Mujer sonriendo" className="w-64 lg:w-80" />
        </div>

        {/* Contenedor de los bloques de información */}
        <div className="relative w-full lg:w-2/3 flex flex-col gap-8">
          {/* Bloque 1 - Vos y tu Voz */}
          <div className="bg-gray-100 p-6 rounded-lg flex items-center gap-4 shadow-md max-w-md mx-auto">
            <img src={vos} alt="Logo Vos y tu Voz" className="w-16 h-16" />
            <div className="text-left">
              <h3 className="font-bold">Vos y tu Voz</h3>
              <p className="text-gray-600 text-sm">
                Más de 20 años ayudando a mejorar la comunicación, liderazgo y presentaciones a través de la voz.
              </p>
            </div>
          </div>

          {/* Flecha Azul - Conectando Vos y VocalTech */}
          <img
            src={frameAzul}
            alt="Flecha azul"
            className="w-10 absolute -left-12 top-[28%] hidden lg:block"
          />

          {/* Bloque 2 - Alianza VocalTech */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
            <h3 className="text-lg font-bold">
              <span className="text-black">Vocal</span>
              <span className="text-blue-600">Tech</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Combinamos la experiencia de ambos mundos para brindar soluciones integrales y personalizadas.
            </p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Descubre más sobre VocalTech →
            </button>
          </div>

          {/* Flecha Morada - Conectando VocalTech y No-Country */}
          <img
            src={frameMorado}
            alt="Flecha morada"
            className="w-10 absolute -left-12 top-[62%] hidden lg:block"
          />

          {/* Bloque 3 - No-Country */}
          <div className="bg-gray-100 p-6 rounded-lg flex items-center gap-4 shadow-md max-w-md mx-auto">
            <img src={country} alt="Logo No-Country" className="w-16 h-16" />
            <div className="text-left">
              <h3 className="font-bold">No-Country</h3>
              <p className="text-gray-600 text-sm">
                Especialistas en MVPs, reskilling y upskilling para crear soluciones innovadoras y equipos preparados para el mercado actual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
