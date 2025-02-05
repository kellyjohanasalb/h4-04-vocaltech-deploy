import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import ServicesPage from "../Pages/ServicesPage"; // Importamos la página de servicios

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false); // Estado para mostrar el modal de servicios

  // Permitir cerrar el modal con la tecla "Escape"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowServices(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav
        className="fixed top-[10px] left-0 right-0 z-50 mx-auto bg-white border border-gray-300 shadow-md rounded-[32px] max-w-[95%] md:w-[1374px] h-[82px] px-6 md:px-[53px] flex justify-between items-center"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-black">
            Vocal<span className="text-purple-600">Tech</span>
          </h1>

          {/* Botón de menú en móviles */}
          <button
            className="text-3xl text-black md:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Menú en pantallas grandes */}
          <ul className="hidden ml-8 md:flex gap-8">
            <li
              className="flex items-end gap-[4px] px-2 text-black hover:text-blue-600 cursor-pointer"
              onClick={() => setShowServices(true)}
            >
              <span>Servicios</span>
              <MdArrowDropDown className="text-lg" />
            </li>
            <li className="text-black cursor-pointer hover:text-blue-600">Emprendedores</li>
            <li className="text-black cursor-pointer hover:text-blue-600">Empresas</li>
            <li className="text-black cursor-pointer hover:text-blue-600">Nosotros</li>
            <li className="text-black cursor-pointer hover:text-blue-600 whitespace-nowrap">
              Contacto
            </li>
          </ul>
        </div>

        {/* Botón y login en pantallas grandes */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="text-sm text-gray-700 hover:text-gray-900 ml-6 whitespace-nowrap"
          >
            Ingresar
          </Link>
          <button
            className="mt-0 w-[90%] max-w-[300px] flex justify-center items-center gap-2 h-[46px] px-4 
              rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] text-[#F8F8F8] 
              font-semibold text-[18px] leading-normal whitespace-nowrap shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),
              0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),
              0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)]
              hover:animate-gradientMove bg-[size:130%_130%] hover:bg-[position:100%_50%]"
            onClick={() => {
              navigate("/formularioinicio");
              setMenuOpen(false);
            }}
          >
            Obtener Diagnóstico Gratis
          </button>
        </div>
      </nav>

      {/* Menú desplegable en móviles */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="fixed top-0 left-0 w-4/5 h-full bg-white shadow-md p-6">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              <MdClose />
            </button>

            {/* Espaciado más amplio debajo del logo en móviles */}
            <div className="mt-12">
              <ul className="space-y-6">
                <li>
                  <button
                    className="w-full text-left text-black hover:text-blue-600 cursor-pointer flex items-center gap-2 py-4"
                    onClick={() => {
                      setShowServices(true);
                      setMenuOpen(false);
                    }}
                  >
                    Servicios <MdArrowDropDown className="text-lg" />
                  </button>
                </li>
                <li className="text-black cursor-pointer hover:text-blue-600 py-4">Emprendedores</li>
                <li className="text-black cursor-pointer hover:text-blue-600 py-4">Empresas</li>
                <li className="text-black cursor-pointer hover:text-blue-600 py-4">Nosotros</li>
                <li className="text-black cursor-pointer hover:text-blue-600 py-4">Contacto</li>
              </ul>
            </div>

            <div className="mt-10">
              <Link to="/login" className="block text-gray-700 hover:text-gray-900 text-lg">
                Ingresar
              </Link>
              <button
                className="w-full mt-6 h-[46px] rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] text-white font-semibold text-[18px]"
                onClick={() => {
                  navigate("/formularioinicio");
                  setMenuOpen(false);
                }}
              >
                Obtener Diagnóstico Gratis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Servicios */}
      {showServices && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="relative w-[98%] md:w-[95%] max-w-[2100px] bg-white p-[24px] rounded-lg shadow-lg max-h-[80vh] overflow-y-auto mt-[100px]">
            <button
              className="absolute text-2xl text-gray-400 transition top-4 right-4 hover:text-gray-600"
              onClick={() => setShowServices(false)}
            >
              <MdClose />
            </button>
            <ServicesPage />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
