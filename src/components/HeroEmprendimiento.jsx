import { TiArrowRightThick } from "react-icons/ti";
import { TbBuildings } from "react-icons/tb";
import fondo from "../assets/images/image 44.png";
import { useNavigate } from "react-router-dom";

const HeroTitle = () => {
    return (
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
            <div className="inline-flex p-2 items-center justify-between gap-2 rounded-[16px] border border-[#6A11CB] bg-[rgba(106,17,203,0.11)] mt-[7rem] max-w-full sm:text-sm md:text-base">
                <p className="flex items-center gap-2 text-[#D4D3F6] font-manrope text-[16px] sm:text-[18px] font-semibold leading-normal text-center">
                    <TbBuildings className="w-5 h-5" /> Emprendedores
                </p>
            </div>

            <div>
                <h1 className="text-white text-center font-dm-sans text-[40px] sm:text-[48px] md:text-[55px] font-bold leading-tight mt-3 px-2">
                    Impulsa tu idea, domina 
                </h1>

                <h1 className="text-white text-center font-dm-sans text-[40px] sm:text-[48px] md:text-[55px] font-bold leading-tight mt-1 px-2">
                    tu mensaje, y haz crecer 
                </h1>
                <h1 className="text-white text-center font-dm-sans text-[40px] sm:text-[48px] md:text-[55px] font-bold leading-tight mt-1 px-2">
                    tu proyecto
                </h1>

                <p className="text-white font-manrope text-lg sm:text-xl mt-4 max-w-[700px]">
                    Aprende a comunicar tu idea con impacto y accede a herramientas tecnológicas
                    para construir tu MVP en tiempo récord.
                </p>
            </div>
        </div>
    );
};

const HeroButtons = () => {
    const navigate = useNavigate(); // ✅ AHORA ESTÁ DENTRO DEL COMPONENTE CORRECTAMENTE

    return (
        <div className="flex flex-wrap justify-center gap-4 px-4 mt-6 sm:px-6">
            <button className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-[#0F0F0F] hover:bg-[#1a1a1a] text-white font-bold text-sm sm:text-base">
                Agendar reunión con un experto 
                <TiArrowRightThick className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </button>
            <button
                className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] 
                shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] animate-gradientMove 
                text-white font-bold text-sm sm:text-base"
                onClick={() => navigate("/form-emprendedor")} // ✅ FUNCIONARÁ BIEN
            >
                Diagnosticar mi emprendimiento
                <TiArrowRightThick className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </button>
        </div>
    );
};

const HeroEmprendimiento = () => {
    return (
        <section
            id="hero"
            className="relative text-center flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden pb-16-[23rem] px-4 sm:px-6"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <HeroTitle />
            <HeroButtons />
        </section>
    );
};

export default HeroEmprendimiento;
