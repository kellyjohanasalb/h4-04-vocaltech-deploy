import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import xIcon from "../assets/icons/X.png"; // Importa la imagen de X
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigateNosotros = () => {
        navigate("/nosotros");
        window.scrollTo(0, 0); // Hace scroll al inicio
    };



    return (
        <footer className="bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] flex flex-col items-start py-16 px-8 md:px-16 max-w-[1440px] mx-auto">
            {/* Contenedor principal (Columna en móvil, Fila en pantallas grandes) */}
            <div className="flex flex-col justify-between w-full gap-10 lg:flex-row">
                {/* Bloque de VocalTech + Formulario */}
                <div className="w-full lg:w-[500px] flex flex-col items-start gap-6">
                    {/* VocalTech */}
                    <h2 className="text-lg font-semibold text-white w-[106px] h-[17px] leading-[17px]">
                        VocalTech
                    </h2>

                    {/* Únete al boletín */}
                    <p className="w-full text-sm font-normal leading-6 text-white md:text-base font-roboto">
                        Únete a nuestro boletín para recibir actualizaciones sobre características y lanzamientos.
                    </p>

                    {/* Input y Botón de Suscripción */}
                    <div className="flex flex-col items-center w-full gap-2 md:flex-row">
                        {/* Input de Correo */}
                        <input
                            type="email"
                            placeholder="Introduce tu correo"
                            className="w-full p-3 text-base font-normal leading-6 text-gray-500 placeholder-gray-500 bg-transparent border border-white rounded-md md:flex-1 focus:outline-none font-roboto"
                        />

                        {/* Botón Suscribirse */}
                        <button className="w-full md:w-[119px] py-3 px-6 justify-center items-center gap-2 border border-white text-white bg-transparent rounded-md hover:bg-white hover:text-black transition">
                            Suscribirse
                        </button>
                    </div>

                    <p className="text-xs text-white opacity-80">
                        Al suscribirte, aceptas nuestra <a href="#" className="underline">Política de Privacidad</a> y
                        consientes recibir actualizaciones.
                    </p>
                </div>

                {/* Contenedor Derecho: Servicios, Institucional y Síguenos (Responsive) */}
                <div className="flex flex-col justify-start w-full gap-10 pl-6 lg:w-1/2 lg:flex-row">

                    {/* Servicios */}
                    <div>
                        <h3 className="font-semibold text-white">Servicios</h3>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex items-start w-full py-2 text-white">
                                <a href="#" className="hover:underline">Para Empresas</a>
                            </li>
                            <li className="flex items-start w-full py-2 text-white">
                                <a href="#" className="hover:underline">Para Emprendedores</a>
                            </li>
                        </ul>
                    </div>

                    {/* Institucional */}
                    <div>
                        <h3 className="font-semibold text-white">Institucional</h3>
                        <ul className="mt-6 space-y-2 text-sm">
                        <li className="flex items-start w-full py-2 text-white">
                            <button onClick={handleNavigateNosotros} className="text-white hover:underline">
                                Nosotros
                            </button>
                        </li>
                            <li className="flex items-start w-full py-2 text-white">
                                <Link to="/contacto" className="hover:underline">Contacto</Link>
                            </li>
                        </ul>
                    </div>


                    {/* Redes Sociales */}
                    <div>
                        <h3 className="font-semibold text-white">Síguenos</h3>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex items-start w-full py-2 text-white">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <CiFacebook size={20} /> Facebook
                                </a>
                            </li>
                            <li className="flex items-start w-full py-2 text-white">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <FaInstagram size={20} /> Instagram
                                </a>
                            </li>
                            <li className="flex items-start w-full py-2 text-white">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <img src={xIcon} alt="X" className="w-5 h-5" /> X
                                </a>
                            </li>
                            <li className="flex items-start w-full py-2 text-white">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <CiLinkedin size={20} /> LinkedIn
                                </a>
                            </li>
                            <li className="flex items-start w-full py-2 text-white">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <FaYoutube size={20} /> Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Línea divisoria */}
            <div className="w-full h-px mt-10 bg-white border-t border-white opacity-100"></div>

            {/* Derechos reservados y políticas */}
            <div className="flex flex-col items-center justify-between w-full mt-4 text-xs md:flex-row opacity-80">
                {/* Texto de derechos reservados alineado a la izquierda */}
                <p className="text-center text-white md:text-left">&copy; 2025 VocalTech. Todos los derechos reservados.</p>

                {/* Enlaces alineados a la derecha en desktop, centrados en móvil */}
                <div className="flex flex-col gap-4 mt-2 text-white md:flex-row md:mt-0">
                    <a href="#" className="hover:underline">Política de Privacidad</a>
                    <a href="#" className="hover:underline">Términos de Servicio</a>
                    <a href="#" className="hover:underline">Configuración de Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
