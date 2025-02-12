import React from "react";
import chica from "../assets/images/perfil-castaña.png";
const UserProfile = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md flex gap-10">
      {/* Sección Izquierda - Información Básica */}
      <div className="w-1/2">
        <h2 className="text-xl font-semibold mb-4">Información Básica</h2>

        {/* Foto de Perfil */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={chica} // Imagen temporal
            alt="Foto de perfil"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-black text-sm">Foto de perfil</span>
            <button className="text-blue-500 hover:underline">Cambiar</button>
          </div>
        </div>

        {/* Campo Email */}
        <div className="w-3/4">
          <label className="block text-gray-600 text-sm mb-1">Email</label>
          <input
            type="email"
            value="admintech@vocaltech.com"
            className="w-full p-2 border rounded-md bg-gray-100 text-gray-500 mb-4"
            disabled
          />
        </div>
        {/* Cambiar Contraseña */}
        <h3 className="text-lg font-semibold mb-2">Cambiar Contraseña</h3>
        <div className="w-3/4">
          <label className="block text-gray-600 text-sm mb-1">
            Contraseña Actual
          </label>
          <input
            type="password"
            className="w-full p-2 border rounded-md mb-4"
            placeholder="********"
          />
        </div>
        <div className="w-3/4">
          <label className="block text-gray-600 text-sm mb-1">
            Contraseña Nueva
          </label>
          <input
            type="password"
            className="w-full p-2 border rounded-md mb-4"
            placeholder="********"
          />{" "}
        </div>

        {/* Botón Guardar Cambios */}
        <div className="w-3/4">
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Guardar Cambios
        </button>
        </div>
      </div>

      {/* Sección Derecha - Sincronizaciones */}
      <div className="w-1/2">
        <h2 className="text-xl font-semibold mb-4">Sincronizaciones</h2>
        <h3 className="text-gray-600 text-sm mb-2">Aplicaciones</h3>

        {/* Tarjeta de Airtable */}
        <div className="border rounded-lg p-4 grid grid-cols-2  gap-4 shadow-md">
          {/* Columna 1: Imagen y Texto */}
          <div className="flex flex-col  ">
            <img src="/image.png" alt="Airtable" className="w-12 h-12" />
            <h4 className="font-semibold mt-2">Airtable</h4>
            <p className="text-gray-500 text-sm">
              Airtable es una plataforma en la nube que permite crear y
              compartir bases de datos relacionales.
            </p>
          </div>

          {/* Columna 2: Estado "Activo" */}
          <div className="flex justify-center items-center">
            <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded-md">
              Activo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
