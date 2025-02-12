import Beneficios from "./Beneficios";
import Clientes from "./Clientes";
import ComoFunciona from "./ComoFunciona";
import Footer from "./footer";
import HeroEmpresa from "./HeroEmpresa";
import Navbar from "./Navbar";


export default function Empresas() {
    return (
        <div className="mx-auto">
            <header>
                <Navbar />
            </header>
            <HeroEmpresa />
            <Beneficios />
            <ComoFunciona />
            <Clientes />
            <Footer />
        </div>
    );
}
