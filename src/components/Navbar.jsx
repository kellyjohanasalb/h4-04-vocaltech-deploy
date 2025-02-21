import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import ServicesPage from "../Pages/ServicesPage"; // Importamos la página de servicios
import logo from "../assets/icons/VocalTech.png"



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
          <Link to="/" className="flex items-center">
  <img src={logo} alt="Logo VocalTech" className="w-[150px] h-auto" />
</Link>


          {/* Botón de menú en móviles */}
          <button
            className="text-3xl text-black md:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Menú en pantallas grandes */}
          <ul className="hidden gap-8 ml-8 md:flex">
            <li
              className="flex items-end gap-[4px] px-2 text-black hover:text-blue-600 cursor-pointer"
              onClick={() => setShowServices(true)}
            >
              <span>Servicios</span>
              <MdArrowDropDown className="text-lg" />
            </li>
            <li><Link to="/emprendedores" className="text-black cursor-pointer hover:text-blue-600">Emprendedores</Link></li>
            <li><Link to="/empresas" className="text-black cursor-pointer hover:text-blue-600">Empresas</Link></li>
            <li><Link to="/nosotros" className="text-black cursor-pointer hover:text-blue-600">
  Nosotros
</Link></li>
            <li><Link to="/contacto" className="text-black cursor-pointer hover:text-blue-600 whitespace-nowrap">Contacto</Link></li>
          </ul>
        </div>

        {/* Botón y login en pantallas grandes */}
        <div className="items-center hidden space-x-6 md:flex">
          <Link
            to="/login"
            className="ml-6 text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap"
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
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden">
          <div className="fixed top-0 left-0 w-4/5 h-full p-6 bg-white shadow-md">
            <button
              className="absolute text-2xl text-gray-600 top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <MdClose />
            </button>

            {/* Espaciado más amplio debajo del logo en móviles */}
            <div className="mt-12">
              <ul className="space-y-6">
                <li>
                  <button
                    className="flex items-center w-full gap-2 py-4 text-left text-black cursor-pointer hover:text-blue-600"
                    onClick={() => {
                      setShowServices(true);
                      setMenuOpen(false);
                    }}
                  >
                    Servicios <MdArrowDropDown className="text-lg" />
                  </button>
                </li>
                <li><Link to="/emprendedores" className="text-black cursor-pointer hover:text-blue-600">Emprendedores</Link></li>
            <li><Link to="/empresas" className="text-black cursor-pointer hover:text-blue-600">Empresas</Link></li>
            <li><Link to="/nosotros" className="text-black cursor-pointer hover:text-blue-600">
  Nosotros
</Link></li>
            <li><Link to="/contacto" className="text-black cursor-pointer hover:text-blue-600 whitespace-nowrap">Contacto</Link></li>
              </ul>
            </div>

            <div className="mt-10">
              <Link to="/login" className="block text-lg text-gray-700 hover:text-gray-900">
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
