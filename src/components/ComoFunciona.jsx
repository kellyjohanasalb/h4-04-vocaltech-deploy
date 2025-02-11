const ComoFunciona = () => {
    const pasos = [
        {
            id: 1,
            titulo: "Realiza tu Primer Diagnóstico Gratuito",
            descripcion:
                "Dinos qué necesitas y descubre oportunidades clave para mejorar. Nuestro diagnóstico gratuito te ayudará a identificar los desafíos y el mejor camino a seguir.",
            video: "/video1.mp4", // Reemplaza con el video correcto
        },
        {
            id: 2,
            titulo: "Recibe la Solución",
            descripcion:
                "Con base en tu diagnóstico, diseñamos una estrategia personalizada para ti. Recibirás un plan de acción claro, alineado con tus objetivos y necesidades.",
            video: "/video2.mp4", // Reemplaza con el video correcto
        },
    ];

    return (
        <section className="bg-[#0A0218] text-white py-16 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold">Cómo Funciona</h2>
                <p className="mt-2 text-gray-400">
                    Un proceso simple para grandes resultados.
                </p>
            </div>

            <div className="max-w-6xl mx-auto mt-12 space-y-16">
                {pasos.map((paso, index) => (
                    <div
                        key={paso.id}
                        className={`flex flex-col lg:flex-row items-center ${
                            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        } gap-8`}
                    >
                        <div className="lg:w-1/2">
                            <span className="font-semibold text-blue-400">PASO {paso.id}</span>
                            <h3 className="mt-2 text-2xl font-bold">{paso.titulo}</h3>
                            <p className="mt-2 text-gray-300">{paso.descripcion}</p>
                        </div>
                        <div className="lg:w-1/2">
                            <video
                                src={paso.video}
                                className="w-full rounded-lg shadow-md"
                                muted
                                loop
                                playsInline
                                onMouseEnter={(e) => e.target.play()}
                                onMouseLeave={(e) => e.target.pause()}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ComoFunciona;
