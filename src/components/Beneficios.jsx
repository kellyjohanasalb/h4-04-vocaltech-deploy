const Beneficios = () => {
    const beneficios = [
        {
            imagen: "/image.jpg",
            titulo: "Diagnóstico Gratuito",
            descripcion: "Identificamos tus necesidades y te damos la solución.",
        },
        {
            imagen: "/image2.png",
            titulo: "Soluciones a Medida",
            descripcion:
                "Te brindamos las herramientas para solucionar las necesidades de tu empresa.",
        },
        {
            imagen: "/image3.png",
            titulo: "Asesores Expertos",
            descripcion: "Acceso a asesoría experta en comunicación y tecnología.",
        },
        {
            imagen: "/image4.png",
            titulo: "Potenciar tu Comunicación",
            descripcion:
                "Mejorar la comunicación dentro de tu empresa, liderazgo y más.",
        },
        {
            imagen: "/image5.png",
            titulo: "Potenciar tu Talento Tech",
            descripcion:
                "Acceso a talento en +20 roles TI validados. Servicios de upskilling, reskilling y más.",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center h-auto max-w-6xl px-6 py-12 mx-auto text-center">
            <div className="w-full mb-10 text-left">
            <h2 className="mb-3 text-5xl font-bold text-left text-black font-dm-sans sm:text-4xl">
                Beneficios para tu empresa
            </h2>
            <p className="mt-2 text-sm text-gray-600 font-manrope">
                Lo que obtendrás con Vocaltech.
            </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-5">
                {beneficios.map((item, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={item.imagen}
                            alt={item.titulo}
                            className="object-cover w-full h-32 rounded-lg shadow-md"
                        />
                        <h3 className="mt-3 font-semibold text-left">{item.titulo}</h3>
                        <p className="text-sm text-left text-gray-600">{item.descripcion}</p>
                    </div>
                ))}
            </div>

            <p className="mt-8 text-gray-600">
                Accede a nuestra guía de consejos y errores comunes:{" "}
                <a href="#" className="font-medium text-blue-600 hover:underline">
                    Descargar Guía →
                </a>
            </p>
        </section>
    );
};

export default Beneficios;
