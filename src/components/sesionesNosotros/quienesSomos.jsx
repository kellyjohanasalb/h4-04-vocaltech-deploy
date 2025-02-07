import historiaImage from "../../assets/images/Frame 163.png"; // Asegúrate de colocar la imagen en la carpeta assets

const QuienesSomos = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-[100px] py-[80px] max-w-6xl mx-auto">
      <div className="flex flex-col w-[500px] items-start gap-[16px]">
        <h2 className="text-[42px] font-bold text-black leading-[120%] font-dm-sans">Quienes Somos</h2>
        <p className="text-[#424242] font-manrope text-[18px]  leading-[140%]">
          Somos una plataforma que une lo mejor de la comunicación y la tecnología para ofrecer soluciones integrales a emprendedores y empresas. Nuestro enfoque está basado en el diagnóstico personalizado y el acompañamiento estratégico para ayudar a nuestros clientes a alcanzar sus objetivos.
        </p>
        <p className="text-[#424242] font-manrope text-[18px]  leading-[140%]">
          Creemos que el verdadero crecimiento empresarial y emprendedor nace de la combinación perfecta entre las habilidades humanas y las soluciones estratégicas. Nuestra misión es ser el socio clave de empresas y emprendedores que buscan no solo adaptarse a los cambios, sino liderarlos.
        </p>
      </div>
      <div className="md:w-auto flex justify-center mt-6 md:mt-0">
        <div className="relative p-0 rounded-lg">
          <img 
            src={historiaImage} 
            alt="Equipo en reunión" 
            className="w-[390px] h-[390px] rounded-[16px] object-cover shadow-md" 
          />
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
