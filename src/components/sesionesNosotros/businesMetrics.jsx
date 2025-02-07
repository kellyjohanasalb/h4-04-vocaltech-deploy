
import Hombre from "../../assets/images/img.png";
import Public from "../../assets/images/Public-Service.png";
import Mujer from "../../assets/images/chica-microfono.png";

const BusinessMetrics = () => {
  return (
    <div className="bg-white border border-blue-500 rounded-lg px-[222px] pt-[112px] pb-[80px] flex justify-center items-center self-stretch max-w-6xl mx-auto text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold text-black">Unimos Fortalezas:<br />Transformamos Negocios</h2>
      <p className="text-gray-600 mt-2">Expertos en comunicación y tecnología trabajando por tu éxito.</p>
      
      {/* Contenedor de imágenes */}
      <div className="flex justify-center gap-4 mt-6">
        <img src={Mujer} alt="Oradora" className="w-20 h-20 object-cover rounded-md" />
        <img src={Public} alt="Equipo trabajando" className="w-20 h-20 object-cover rounded-md" />
        <img src={Hombre} alt="Mentor" className="w-20 h-20 object-cover rounded-md" />
      </div>
      
      {/* Métricas */}
      <div className="grid grid-cols-4 gap-4 text-center mt-8">
        <div>
          <p className="text-2xl font-bold text-purple-600">+15</p>
          <p className="text-gray-600">Presencia en Países</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-600">+5.000</p>
          <p className="text-gray-600">Talentos IT Validados</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-600">+20</p>
          <p className="text-gray-600">Roles Tech</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-purple-600">+1.000</p>
          <p className="text-gray-600">Talleres impartidos</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessMetrics;
