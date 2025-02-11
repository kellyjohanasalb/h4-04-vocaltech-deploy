import Beneficios from "./Beneficios";
import ComoFunciona from "./ComoFunciona";
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
        </div>
    );
}
