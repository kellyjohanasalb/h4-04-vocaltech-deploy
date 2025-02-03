
import VocalTech1 from "../assets/icons/vovaltech.png";
import { FaEllipsisV, FaInfoCircle, FaTrashAlt, FaClipboardCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import chica from "../assets/images/perfil-castaña.png"

// Sidebar
const Sidebar = ({ setView }) => (
  <aside className="w-64 bg-gray-100 h-screen p-6 flex flex-col">
    {/* Logo */}
    <div className="ml-11 mb-11">
      <img src={VocalTech1} alt="VocalTech1" className="h-5 w-22 mb-6" />
    </div>

    {/* Menú de navegación */}
    <nav className="space-y-7 flex-1">
      <button
        onClick={() => setView("stats")}
        className="flex items-center space-x-2 p-2 rounded-full w-full hover:bg-purple-700 hover:text-white"
      >
        <span>🏠</span>
        <span>Inicio</span>
      </button>

      <button
        onClick={() => setView("leads")}
        className="flex items-center space-x-2 p-2 w-full rounded-full hover:bg-purple-700 hover:text-white"
      >
        <span>📋</span>
        <span>Leads</span>
      </button>
    </nav>

    {/* Botón de Configuración */}
    <button className="flex items-center space-x-2 p-2 w-full rounded-full hover:bg-purple-700 hover:text-white">
      <span>⚙️</span>
      <span>Configuración</span>
    </button>
  </aside>
);

// Header
const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md">
    <div className="flex-grow"></div>
    <input
      type="text"
      placeholder="Buscar aquí..."
      className="border p-2 rounded-md w-1/3 ml-auto mr-4"
    />
    <div className="flex items-center space-x-4">
      <button>🔔</button>
      <div className="flex items-center space-x-2">
        <span>Admin</span>
        <img
          src={chica}
          alt="Perfil"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  </header>
);

// Stats
const Stats = () => (
  <section className="grid grid-cols-3 gap-4 p-4">
    {[
      { title: "Leads", value: "1222", extra: "+10 Este Mes", color: "blue" },
      { title: "Convertidos", value: "55", extra: "+10 Este Mes", color: "green" },
      { title: "Pendientes", value: "12", extra: "+12 Este Mes", color: "purple" },
    ].map(({ title, value, extra }) => (
      <div key={title} className="p-4 bg-white shadow-md rounded-lg">
        <p className="text-gray-500 font-medium">{title}</p>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-blue-500 mr-2">{value}</h2>
          <p className="text-sm text-green-500">{extra}</p>
        </div>
      </div>
    ))}
  </section>
);

// Mock de datos
const mockData = [
  { id: 1, name: "Juan Pérez", email: "juan@correo.com", phone: "123456789", category: "Empresa", status: "Activo" },
  { id: 2, name: "Ana Gómez", email: "ana@correo.com", phone: "987654321", category: "Emprendedor", status: "Inactivo" },
  { id: 3, name: "Carlos Ruiz", email: "carlos@correo.com", phone: "456789123", category: "Empresa", status: "Activo" },
  { id: 4, name: "Lucía Martínez", email: "lucia@correo.com", phone: "987123456", category: "Emprendedor", status: "Activo" },
  { id: 5, name: "Pedro Sánchez", email: "pedro@correo.com", phone: "321654987", category: "Empresa", status: "Inactivo" },
];

// Tabla de usuarios (Leads)
const UsersTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(null); // Estado para manejar qué menú está abierto
  const navigate = useNavigate(); // 👈 Hook para la navegación

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

   const handleViewDetails = (id) => {
    navigate(`/adminEmprendedor/${id}`); // Redirige a la página de detalles
  };

  if (loading) return <div>Cargando...</div>;
  return (
    <section className="p-4">
      <h2 className="font-bold">Resumen Leads</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">ID</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Email</th>
            <th className="p-2">Celular</th>
            <th className="p-2">Categoría</th>
            <th className="p-2">Estado</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lead) => (
            <tr key={lead.id} className="border-t relative">
              <td className="p-2">{lead.id}</td>
              <td className="p-2">{lead.name}</td>
              <td className="p-2">{lead.email}</td>
              <td className="p-2">{lead.phone}</td>
              <td className="p-2">{lead.category}</td>
              <td className="p-2">
                <span className="bg-green-100 text-green-600 p-1 rounded-md">
                  {lead.status}
                </span>
              </td>
              <td className="p-2 relative">
                {/* Botón de menú desplegable */}
                <button
                  onClick={() => toggleMenu(lead.id)}
                  className="text-gray-600 p-2 hover:bg-gray-200 rounded-full"
                >
                  <FaEllipsisV />
                </button>

                {/* Menú desplegable */}
                {openMenu === lead.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleViewDetails(lead.id)}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                    >
                      <FaInfoCircle className="mr-2" /> Ver Detalles
                    </button>

                    <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                      <FaClipboardCheck className="mr-2" /> Diagnosticar
                    </button>
                    <button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 w-full">
                      <FaTrashAlt className="mr-2" /> Eliminar Lead
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {[1, 2, 3, "...", 10].map((page, index) => (
          <button key={index} className="mx-1 p-2 border rounded-md">
            {page}
          </button>
        ))}
      </div>
    </section>
  );


};

// Componente de Gestión de Leads
const GestionLeads = () => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Gestión de Leads</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
        <span>➕</span>
        <span>Agregar Lead</span>
      </button>
    </div>

    <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-4">
      <div className="flex items-center bg-white border rounded-md p-2 w-1/3">
        <span className="mr-2">🔍</span>
        <input type="text" placeholder="Buscar aquí..." className="w-full outline-none" />
      </div>
      <select className="border p-2 rounded-md">
        <option>Estado</option>
      </select>
      <select className="border p-2 rounded-md">
        <option>Categoría</option>
      </select>
      <button className="border p-2 rounded-md flex items-center">
        <span>📅</span>
        <span>Fecha</span>
      </button>
    </div>
  </div>
);


// Dashboard con cambio de vistas
const Dashboard = () => {
  const [view, setView] = useState("stats"); // "stats" o "leads"

  return (
    <div className="flex">
      <Sidebar setView={setView} />
      <main className="flex-1 flex flex-col">
        <Header />
        {view === "stats" ? (
          <>
            <Stats />
            <UsersTable />
          </>
        ) : (
          <> <GestionLeads />
             <UsersTable />
          </>
         
        )}
      </main>
    </div>
  );
};

export default Dashboard;

