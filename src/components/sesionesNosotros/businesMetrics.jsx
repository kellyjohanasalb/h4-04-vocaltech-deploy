import Hombre from "../../assets/images/img.png";
import Public from "../../assets/images/Public-Service.png";
import Mujer from "../../assets/images/chica-microfono.png";

const BusinessMetrics = () => {
  return (
    <div className="bg-white rounded-lg px-[184px] pt-[112px] pb-[80px] flex flex-col self-stretch max-w-7xl mx-auto">
      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 w-full align-self-stretch mr-20">
        {/* Contenedor de título y descripción */}
        <div className="flex flex-col items-start gap-2 flex-1">
          <h2 className="text-[40px] font-semibold text-black leading-[48px] tracking-[-1.3px] font-[\'DM Sans\']">
            Unidos Fortalezas:<br />Transforma Negocios
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed w-full whitespace-nowrap">Expertos en comunicación y tecnología trabajando por tu éxito.</p>
        </div>
        
        {/* Contenedor de imágenes */}
        <div className="flex gap-6 flex-1 justify-end">
          <img src={Mujer} alt="Oradora" className="w-28 h-28 object-cover rounded-lg shadow-lg" />
          <img src={Public} alt="Equipo trabajando" className="w-28 h-28 object-cover rounded-lg shadow-lg" />
          <img src={Hombre} alt="Mentor" className="w-28 h-28 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
      
      {/* Métricas */}
      <div className="grid grid-cols-4 gap-8 text-center mt-12 w-full">
        <div className="flex flex-col items-center">
          <p className="text-[40px] font-bold leading-[48px] font-[\'DM Sans\'] bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent tabular-nums">+15</p>
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-lg mt-2 ml-7">Presencia en</p>
            <p className="text-gray-600 text-lg mr-[25px]">Países</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[40px] font-bold leading-[48px] font-[\'DM Sans\'] bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent tabular-nums">+5.000</p>
          <p className="text-gray-600 text-lg mt-2 -ml-6">Talentos IT<br />Validados</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[40px] font-bold leading-[48px] font-[\'DM Sans\'] bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent tabular-nums">+20</p>
          <p className="text-gray-600 text-lg mt-2 ml-2">Roles Tech</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-[40px] font-bold leading-[48px] font-[\'DM Sans\'] bg-gradient-to-r from-blue-500 via-blue-900 to-purple-600 bg-clip-text text-transparent tabular-nums ml-5">+1.000</p>
          <p className="text-gray-600 text-lg mt-2 mr-[40px]">Talleres</p>
          <p className="text-gray-600 text-lg mr-[9px]">Impartidos</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessMetrics;
