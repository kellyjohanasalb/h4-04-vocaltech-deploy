import Navbar from "../components/Navbar";
import HeroSection from "../components/heroSection";
import Carrusel from "../components/carruselLandingSection"
import Nosotros from "../components/nosotrosSection";
import Servicios from "../components/serviciosSection";
import Empresas from "../components/empresasSection";
import Emprendedores from "../components/emprendedoresSection";
import Testimonios from "../components/testimoniosSection";
import FAQ from "../components/preguntasFrecuentesSection";
import Footer from "../components/footer";

const LandingPage = () => {
    return (
        <div className=" text-white">
            {/* Navbar */}
            <header className="p-4">
                <Navbar />
            </header>

            {/* Secciones */}
            <HeroSection />
            <Carrusel />
            <Nosotros />
            <Servicios />
            <Empresas />
            <Emprendedores />
            <Testimonios />
            <FAQ />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;
