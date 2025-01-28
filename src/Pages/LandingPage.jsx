import Navbar from "../components/Navbar";
import { TiArrowRightThick } from "react-icons/ti";
import etiqueta from "../assets/icons/etiqueta-nuevo.png"


const LandingPage = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* Navbar */}
            <header className="p-4 bg-gray-800">
                <Navbar />
            </header>

          {/* Hero Section */}
<section id="hero" className="text-center py-20">
    {/* Imagen con estilos personalizados */}
    <img 
        src={etiqueta} 
        alt="" 
        className="inline-flex p-2 items-center gap-2 rounded-[16px] border border-[#6A11CB] bg-[rgba(106,17,203,0.11)]"
    />
    
    {/* Título con estilos solicitados */}
    <h1 className="text-white text-center font-dm-sans text-[64px] font-bold leading-normal">
        Impulsa tu Crecimiento con Soluciones a Medida
    </h1>

    {/* Subtítulo con estilos solicitados */}
    <p className="text-[#EAEAEA] text-center font-manrope text-[24px] font-semibold leading-normal mt-4">
        VocalTech le pone voz y tecnología a tu proyecto.
    </p>

    <div className="mt-6 flex justify-center">
        {/* Botón para emprendedores */}
        <button
            className="flex items-center justify-center gap-2 h-[46px] px-[10px] rounded-[16px] bg-[#0F0F0F] hover:bg-[#1a1a1a] text-white font-bold m-2"
        >
            Soluciones para emprendedores
            <TiArrowRightThick className="w-6 h-6 text-white" />
        </button>

        {/* Botón para empresas */}
        <button
            className="flex items-center justify-center gap-[10px] h-[46px] px-[10px] rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] 
            shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] animate-gradientMove 
            text-white font-bold m-2"
        >
            Potencia tu Empresa Ahora
            <TiArrowRightThick className="w-6 h-6 text-white" />
        </button>
    </div>
</section>


            {/* Sección Nosotros */}
            <section id="nosotros" className="py-16 text-center">
                <h2 className="text-3xl font-semibold">Juntos, impulsamos tu crecimiento</h2>
                <div className="mt-4 text-lg">
                    <p>Más de 20 años ayudando en comunicación y liderazgo.</p>
                    <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Descubre más sobre VocalTech</button>
                </div>
            </section>

            {/* Sección Servicios */}
            <section id="servicios" className="py-16 text-center">
                <h2 className="text-3xl font-semibold">Cómo podemos ayudarte a crecer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-gray-800 p-6 rounded-lg">Diagnósticos Personalizados</div>
                    <div className="bg-gray-800 p-6 rounded-lg">Soluciones Integrales</div>
                    <div className="bg-gray-800 p-6 rounded-lg">Estrategias de Comunicación</div>
                </div>
            </section>

            {/* Sección Empresas & Emprendedores */}
            <section id="empresas" className="py-16 text-center">
                <h2 className="text-3xl font-semibold">Soluciones IT para Empresas Innovadoras</h2>
                <p className="mt-4">Identificamos necesidades clave como comunicación y liderazgo.</p>
                <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Diagnosticar mi Empresa</button>
            </section>
            <section id="emprendedores" className="py-16 text-center">
                <h2 className="text-3xl font-semibold">Impulsa tu Proyecto Ahora</h2>
                <p className="mt-4">Accede a herramientas y recursos para crecer.</p>
                <button className="mt-6 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Diagnosticar mi Emprendimiento</button>
            </section>

            {/* Testimonios */}
            <section id="testimonios" className="py-16 text-center">
                <h2 className="text-3xl font-semibold">Lo que dicen nuestros clientes</h2>
                <div className="mt-6 bg-gray-800 p-6 rounded-lg">
                    <p>Gracias a VocalTech, nuestra comunicación interna mejoró muchísimo.</p>
                </div>
            </section>

            {/* Preguntas Frecuentes */}
            <section id="faq" className="py-16 text-center">
                <h2 className="text-3xl font-semibold">Preguntas Frecuentes</h2>
                <details className="mt-6 bg-gray-800 p-4 rounded-lg">
                    <summary className="cursor-pointer">¿Qué es VocalTech?</summary>
                    <p className="mt-2">Una empresa de soluciones en comunicación y tecnología.</p>
                </details>
            </section>

            {/* Footer */}
            <footer className="p-4 bg-gray-800 text-center">
                <p>&copy; 2025 VocalTech - Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
