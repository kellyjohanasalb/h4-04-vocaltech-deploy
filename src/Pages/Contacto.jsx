
import Navbar from "../components/Navbar";
import citi from  "../assets/icons/image 28.png";
import Volswagen from "../assets/icons/image 27.png";
import Pae from "../assets/icons/image 29.png";
import HSBC  from "../assets/icons/image 25.png";
import globant from "../assets/icons/image 26.png";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold">Contactar al equipo de Vocaltech</h2>
            <p className="mt-4 text-gray-700">
              Las mejores ideas cobran vida cuando se comunican con claridad y estrategia. 
              En VocalTech, te ayudamos a conectar, liderar y construir con impacto.
            </p>
            <p className="mt-2 text-gray-700">Escríbenos y comencemos a crear juntos.</p>
            <p className="mt-2 text-gray-700">
              Miles de emprendedores y empresas ya confían en VocalTech para impulsar su comunicación y desarrollo, ¿te sumas?
            </p>
            <div className="flex space-x-4 mt-4">
              <img src={Volswagen} alt="logo1" className="h-8" />
              <img src={Pae} alt="logo2" className="h-8" />
              <img src={HSBC} alt="logo3" className="h-8" />
              <img src={globant} alt="logo3" className="h-8" />
              <img src={citi} alt="logo3" className="h-8" />
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Formulario de Contacto</h4>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Nombre</label>
                <input type="text" placeholder="Tu nombre / Empresa" className="w-full mt-2 p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" placeholder="ejemplo@correo.com" className="w-full mt-2 p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Asunto</label>
                <input type="text" placeholder="Asunto de tu consulta" className="w-full mt-2 p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mensaje</label>
                <textarea rows="4" placeholder="¿En qué te podemos ayudar?" className="w-full mt-2 p-2 border rounded-lg"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
