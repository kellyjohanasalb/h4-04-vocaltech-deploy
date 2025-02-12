import BeneficiosEmpre from "./BeneficiosEmpre";
import Clientes from "./ClientesEmprendedores";
import ComoFunciona from "./ComoFunciona";
import Footer from "./footer";
import HeroEmprendimiento from "./HeroEmprendimiento";
import Navbar from "./Navbar";


export default function Emprendedores() {
    return (
        <div>
            <div className="mx-auto">
            <header>
                <Navbar />
            </header>
            <HeroEmprendimiento />
            <BeneficiosEmpre />
            <ComoFunciona />
            <Clientes />
            <Footer />
        </div>
        </div>
    )
}
