import round from "../assets/icons/Round Alt Arrow Down.png";

const faqs = [
  { question: "¿Qué es Vocal Tech y cómo puede ayudarme?", answer: "Vocal Tech es una empresa que ofrece soluciones en comunicación y tecnología." },
  { question: "¿El diagnóstico tiene algún costo?", answer: "No, el diagnóstico es completamente gratuito." },
  { question: "Soy emprendedor, ¿qué puedo obtener con el diagnóstico?", answer: "Obtendrás un análisis detallado de tus necesidades y una propuesta personalizada." },
  { question: "¿Cuánto tiempo lleva recibir el diagnóstico personalizado?", answer: "El diagnóstico personalizado se entrega en un plazo de 48 horas." },
  { question: "¿Puedo acceder a soluciones combinadas de comunicación y tecnología?", answer: "Sí, ofrecemos soluciones integradas adaptadas a cada empresa." },
  { question: "¿Qué tipo de empresas pueden beneficiarse de sus servicios?", answer: "Empresas de todos los tamaños y sectores pueden aprovechar nuestras soluciones." }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-6 bg-white text-center">
      {/* Sección de "FQA" */}
      <p className="self-stretch text-[#9A9A9A] text-center font-dm-sans text-[20px] font-normal leading-[120%]">
        FQA
      </p>

      {/* Título "Preguntas Frecuentes" con menos margen arriba */}
      <h2 className="self-stretch text-[#000] text-center font-dm-sans text-[48px] font-semibold leading-[120%] tracking-[-0.96px] mt-6">
        Preguntas Frecuentes
      </h2>

      {/* Contenedor de preguntas con espacio de 24px entre filas y 16px entre columnas */}
      <div className="grid md:grid-cols-2 gap-y-6 gap-x-4 max-w-4xl mx-auto mt-16">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-left">
            <div className="flex justify-between items-center">
              {/* Hover solo en el texto */}
              <span className="text-[#000] font-manrope text-[16px] font-semibold hover:text-violet-700 transition duration-300">
                {faq.question}
              </span>
              {/* Imagen como ícono con tamaño exacto */}
              <img src={round} alt="Expandir" className="w-6 h-6 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
