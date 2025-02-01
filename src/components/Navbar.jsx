import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 mx-auto bg-white border border-gray-300 shadow-md rounded-[32px] max-w-[95%] md:w-[1374px] h-[82px] px-6 md:px-[53px] flex justify-between items-center"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center w-full justify-between md:justify-start">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          Vocal<span className="text-purple-600">Tech</span>
        </h1>

        {/* Botón de menú en móviles */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6 ml-8">
          <li
            className="flex items-end gap-[4px] px-2 text-black hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/services")}
          >
            <span>Servicios</span>
            <MdArrowDropDown className="text-lg" />
          </li>
          <li className="text-black hover:text-blue-600 cursor-pointer">Emprendedores</li>
          <li className="text-black hover:text-blue-600 cursor-pointer">Empresas</li>
          <li className="text-black hover:text-blue-600 cursor-pointer">Nosotros</li>
          <li className="text-black hover:text-blue-600 cursor-pointer">Contacto</li>
        </ul>
      </div>

      {/* Botón y login en pantallas grandes */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login" className="text-sm text-gray-700 hover:text-gray-900">
          Ingresar
        </Link>
        <button
          className="relative flex justify-center items-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] text-[#F8F8F8] font-semibold text-[18px] leading-normal shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] bg-[length:200%_200%] hover:animate-gradientMove whitespace-nowrap"
          onClick={() => navigate("/formularioinicio")}
        >
          Obtener Diagnóstico Gratis
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="absolute top-[82px] left-0 w-full bg-white border-t border-gray-300 shadow-lg md:hidden flex flex-col items-center py-4">
          <ul className="flex flex-col space-y-4 text-lg w-full text-center">
            <li
              className="text-black hover:text-blue-600 cursor-pointer"
              onClick={() => {
                navigate("/services");
                setMenuOpen(false);
              }}
            >
              Servicios
            </li>
            <li className="text-black hover:text-blue-600 cursor-pointer">Emprendedores</li>
            <li className="text-black hover:text-blue-600 cursor-pointer">Empresas</li>
            <li className="text-black hover:text-blue-600 cursor-pointer">Nosotros</li>
            <li className="text-black hover:text-blue-600 cursor-pointer">Contacto</li>
          </ul>
          <Link
            to="/login"
            className="mt-4 text-sm text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            Ingresar
          </Link>
          <button
            className="mt-4 w-[90%] max-w-[300px] flex justify-center items-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] text-[#F8F8F8] font-semibold text-[18px] leading-normal shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] bg-[length:200%_200%] hover:animate-gradientMove whitespace-nowrap"
            onClick={() => {
              navigate("/formularioinicio");
              setMenuOpen(false);
            }}
          >
            Obtener Diagnóstico Gratis
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
