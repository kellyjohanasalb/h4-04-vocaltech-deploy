import { TiArrowRightThick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const HeroButtons = () => {
    const navigate = useNavigate(); // Debe estar dentro del componente

    return (
        <div className="flex flex-wrap justify-center gap-4 px-4 mt-6 sm:px-6">
            <button className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-[#0F0F0F] hover:bg-[#1a1a1a] text-white font-medium text-sm sm:text-base">
                Agendar reunión con un experto 
                <TiArrowRightThick className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </button>
            <button 
                className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] 
                shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] animate-gradientMove 
                text-white font-medium text-sm sm:text-base"
                onClick={() => navigate("/form-empresa")}
            >
                Diagnosticar mi Empresa Ahora
                <TiArrowRightThick className="w-5 h-5 text-white sm:w-6 sm:h-6" />
            </button>
        </div>
    );
};

const Clientes = () => {
    return (
        <section className="px-4 py-16 text-center">
            <h4 className="text-sm font-dm-sans text-[#424242]">CLIENTES</h4>
            <h2 className="mt-2 text-4xl font-semibold font-dm-sans">
                Empresas que confían en nuestros resultados
            </h2>

            {/* Logos de empresas */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
                <img src="/vw.png" alt="Volkswagen" className="h-10" />
                <img src="/pae.png" alt="PAE" className="h-10" />
                <img src="/hsbc.png" alt="HSBC" className="h-10" />
                <img src="/globant.png" alt="Globant" className="h-10" />
                <img src="/citi.png" alt="Citi" className="h-10" />
            </div>

            <p className="mt-6 mb-5 text-gray-600">
                Empresas como la tuya ya están evolucionando. ¿Te sumas?
            </p>

            {/* Botones */}
            <HeroButtons />
        </section>
    );
};

export default Clientes;
