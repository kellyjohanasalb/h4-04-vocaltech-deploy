import Hombre from "../../assets/images/img.png";
import Public from "../../assets/images/Public-Service.png";
import Mujer from "../../assets/images/chica-microfono.png";

const BusinessMetrics = () => {
  return (
    <div className="bg-white rounded-lg px-6 md:px-[184px] pt-[80px] md:pt-[112px] pb-[80px] flex flex-col self-stretch max-w-7xl mx-auto">
      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 w-full">
        {/* Contenedor de título y descripción */}
        <div className="flex flex-col items-start gap-2 flex-1 text-center lg:text-left">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-black leading-[48px] tracking-[-1.3px] font-dm-sans">
            Unidos Fortalezas:<br className="hidden md:block" />Transforma Negocios
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed w-full max-w-none whitespace-nowrap">
  Expertos en comunicación y tecnología trabajando por tu éxito.
</p>  </div>

        {/* Contenedor de imágenes */}
        <div className="flex gap-4 md:gap-6 flex-1 justify-center lg:justify-end">
          <img src={Mujer} alt="Oradora" className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg shadow-lg" />
          <img src={Public} alt="Equipo trabajando" className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg shadow-lg" />
          <img src={Hombre} alt="Mentor" className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mt-12 w-full">
        <div className="flex flex-col items-center">
          <p className="text-[40px] font-bold leading-[48px] font-dm-sans bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent">
            +15
          </p>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm md:text-lg mt-2 ml-7">Presencia en</p>
            <p className="text-gray-600 text-sm md:text-lg mr-[25px]">Países</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[40px] font-bold leading-[48px] font-dm-sans bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent">
            +5.000
          </p>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm md:text-lg mt-2 -ml-6">Talentos IT</p>
            <p className="text-gray-600 text-sm md:text-lg mr-6">Validados</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[40px] font-bold leading-[48px] font-dm-sans bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent">
            +20
          </p>
          <p className="text-gray-600 text-sm md:text-lg mt-2 ml-2">Roles Tech</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[40px] font-bold leading-[48px] font-dm-sans bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent">
            +1.000
          </p>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm md:text-lg mt-2 mr-[58px]">Talleres</p>
            <p className="text-gray-600 text-sm md:text-lg mr-[27px]">Impartidos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessMetrics;
