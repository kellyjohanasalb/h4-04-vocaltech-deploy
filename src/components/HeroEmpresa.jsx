import { TiArrowRightThick } from "react-icons/ti";
import { TbBuildings } from "react-icons/tb";
import VOS from "../assets/icons/image 23.png";
import fondo from "../assets/images/image 44.png";
import Nocountry from "../assets/images/image 31.png";

const HeroTitle = () => (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
        <div className="inline-flex p-2 items-center justify-between gap-2 rounded-[16px] border border-[#6A11CB] bg-[rgba(106,17,203,0.11)] mt-[7rem] max-w-full sm:text-sm md:text-base">
            {/*<img src={etiqueta} alt="Etiqueta" className="w-5 h-5 sm:w-6 sm:h-6" />*/}
            <p className="flex items-center gap-2 text-[#D4D3F6] font-manrope text-[16px] sm:text-[18px] font-semibold leading-normal text-center">
                <TbBuildings className="w-5 h-5" /> Empresa
            </p>
        </div>

        <div>
            <h1 className="text-white text-center font-dm-sans text-[40px] sm:text-[48px] md:text-[55px] font-bold leading-tight mt-6 px-2">
                Lidera con{" "}
                <span className="bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent">
                    claridad,
                </span>
            </h1>

            <h1 className="text-white text-center font-dm-sans text-[40px] sm:text-[48px] md:text-[55px] font-bold leading-tight mt-3 px-2">
                Transforma con{" "}
                <span className="bg-gradient-to-r from-[#FCDFB3] via-[#C0864B] to-[#FBE8D4] bg-clip-text text-transparent">
                    tecnología
                </span>
            </h1>

            <p className="text-white font-manrope text-lg sm:text-xl mt-4 max-w-[700px]">
                Optimiza la comunicación interna, fortalece tu liderazgo y encuentra talento
                validado para impulsar tu crecimiento.
            </p>
        </div>


    </div>
);

const HeroButtons = () => (
    <div className="flex flex-wrap justify-center gap-4 px-4 mt-6 sm:px-6">
        <button className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-[#0F0F0F] hover:bg-[#1a1a1a] text-white font-bold text-sm sm:text-base">
            Agendar reunión con un experto 
            <TiArrowRightThick className="w-5 h-5 text-white sm:w-6 sm:h-6" />
        </button>
        <button className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] 
            shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] animate-gradientMove 
            text-white font-bold text-sm sm:text-base">
            Diagnosticar mi Empresa Ahora
            <TiArrowRightThick className="w-5 h-5 text-white sm:w-6 sm:h-6" />
        </button>
    </div>
);

const HeroFooter = () => (
    <div className="mt-12 text-[#CCC] font-manrope text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-normal flex flex-wrap items-center justify-center gap-2 px-4">
        <span>Powered by</span>
        <img src={Nocountry} alt="logo NoCountry" className="w-[100px] sm:w-[122px] h-auto" />
        <span>&</span>
        <img src={VOS} alt="logo VOS" className="w-[36px] sm:w-[42px] h-auto" />
    </div>
);

const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative text-center flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden pb-16-[23rem] px-4 sm:px-6"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <HeroTitle />
            <HeroButtons />
            <HeroFooter />
        </section>
    );
};

export default HeroSection;
