const ComoFunciona = () => {
    const pasos = [
        {
            id: 1,
            titulo: "Realiza tu Primer Diagnóstico Gratuito",
            descripcion:
                "Dinos qué necesitas y descubre oportunidades clave para mejorar. Nuestro diagnóstico gratuito te ayudará a identificar los desafíos y el mejor camino a seguir.",
            video: "/video.mp4", 
        },
        {
            id: 2,
            titulo: "Recibe la Solución",
            descripcion:
                "Con base en tu diagnóstico, diseñamos una estrategia personalizada para ti. Recibirás un plan de acción claro, alineado con tus objetivos y necesidades.",
            video: "/video2.mp4", 
        },
        {
            id: 3,
            titulo: "Comienza a transformar tu empresa",
            descripcion:
                "Es hora de implementar cambios y ver resultados. Con el apoyo de nuestros expertos, potenciarás tu comunicación, liderazgo y tecnología para llevar tu negocio al siguiente nivel.", 
            video: "/video3.mp4", 
        },
    ];

    return (
        <section className="bg-[#0F0625] text-white py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Cómo Funciona</h2>
                <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    Un proceso simple para grandes resultados.
                </p>
            </div>

            <div className="max-w-6xl mx-auto mt-12 space-y-16">
                {pasos.map((paso, index) => (
                    <div
                        key={paso.id}
                        className={`flex flex-col-reverse sm:flex-row items-center gap-8 ${
                            index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                        }`}
                    >
                        <div className="w-full text-center sm:w-1/2 sm:text-left">
                            <span className="text-sm font-semibold text-blue-400 sm:text-base">
                                PASO {paso.id}
                            </span>
                            <h3 className="mt-2 text-xl font-bold sm:text-2xl">{paso.titulo}</h3>
                            <p className="mt-2 text-sm text-gray-300 sm:text-base">{paso.descripcion}</p>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <video
                                src={paso.video}
                                className="w-full h-auto rounded-lg shadow-md"
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
