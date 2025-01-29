import vos from "../assets/icons/Default-vos.png";
import tech from "../assets/icons/vovaltech.png";
import country from "../assets/icons/Default.png";
import mujer from "../assets/images/image-1.png";
import frameAzul from "../assets/icons/Frame.png";
import frameMorado from "../assets/icons/Frame (1).png";

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-16 px-8 relative flex flex-col items-center">
      {/* Sección del Título */}
      <h2 className="w-full text-[48px] font-bold text-black text-center leading-[57.6px] font-sans">
        Juntos, impulsamos tu <br />
        <span className="block">crecimiento</span>
      </h2>

      {/* Contenedor principal */}
      <div className="mt-[45px] relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-[45px]">
        
        {/* Imagen de la mujer */}
        <div className="relative w-[561px] h-[643px] flex-shrink-0 ml-[-40px]">
          <img
            src={mujer}
            alt="Mujer sonriendo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenedor de los bloques de información */}
        <div className="relative w-full lg:w-2/3 flex flex-col gap-[45px]">

            {/* Bloque 1 - Vos y tu Voz */}
            <div className="inline-flex p-4 items-start gap-[59px] rounded-[16px] opacity-60 bg-white shadow-[0px_5px_1px_rgba(0,0,0,0),0px_3px_1px_rgba(0,0,0,0.01),0px_2px_1px_rgba(0,0,0,0.04),0px_1px_1px_rgba(0,0,0,0.06)] max-w-md mx-auto">
            {/* Logo */}
            <img src={vos} alt="Logo Vos y tu Voz" className="w-16 h-16" />

            {/* Contenido de texto */}
            <div className="text-left">
              <h3 className="text-black font-bold text-[20px] font-sans">Vos y tu Voz</h3>
              <p className="text-[#424242] font-medium text-[16px] font-sans">
                Más de 20 años ayudando a mejorar la comunicación, liderazgo y presentaciones a través de la voz.
              </p>
            </div>
          </div>

          {/* Flecha Azul - Conectando Vos y VocalTech */}
          <img
            src={frameAzul}
            alt="Flecha azul"
            className="absolute w-[190px] h-[190px] left-[-80px] top-[-10px] hidden lg:block"
          />

          
{/* Bloque 2 - Alianza */}
<div className="inline-flex w-full max-w-[600px] py-4 px-6 items-start gap-6 rounded-[16px] bg-white shadow-md relative left-[-80px] lg:left-[-120px]">
  
  {/* Logo alineado arriba (a la altura de "Alianza") */}
  <img src={tech} alt="Logo VocalTech" className="h-[30px] flex-shrink-0 self-start" />

  {/* Contenido de texto y botón a la derecha */}
  <div className="flex flex-col flex-grow gap-2">
    <h3 className="text-black font-bold text-[20px] font-sans">Alianza</h3>
    <p className="text-[#424242] text-[18px] font-semibold font-manrope">
      Combinamos la experiencia de ambos mundos para brindar soluciones integrales y personalizadas.
    </p>
    <button className="w-auto px-4 py-2 rounded-[21px] bg-blue-600 text-white font-bold">
      Descubre más sobre VocalTech →
    </button>
  </div>

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
              <h3 className="font-bold text-black text-[20px] font-sans">No-Country</h3>
              <p className="text-gray-600 text-sm">
                Especialistas en MVPs, reskilling y upskilling para crear soluciones innovadoras y equipos preparados para el mercado actual.
              </p>
            </div>
          </div>

        </div> {/* Fin del contenedor de bloques */}
      </div> {/* Fin del contenedor principal */}
    </section>
  );
};

export default Nosotros;
