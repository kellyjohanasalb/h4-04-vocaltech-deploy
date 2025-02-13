import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Crear el contexto
const FormularioContext = createContext();

// Proveedor del contexto
export const FormularioProvider = ({ children }) => {
    const [formData, setFormData] = useState(
        {
            name: "string",
            tiempo: "string",
            redes: "string",
            sector_actividad: "string",
            etapa: "string",
            categoria: "Emprendedor",
            respuestas: {
                comunicacion: {
                    capacidad_comunicar: "string",
                    importancia_comunicacion_ventas: "string",
                    seguro_comunicar: "string",
                    principal_desafio: "string",
                    mayor_barrera: "string",
                    impacto_comunicacion_liderazgo: "string",
                    mayor_desafio: "string"
                },
                pitch: {
                    pitch: "string",
                    frecuencia_presenta: "string",
                    preparado_presentar: "string",
                    mejorar_pitch: {
                        claridad: 4,
                        impacto_persuacion: 4,
                        presentacion_visual: 4,
                        seguridad_confianza: 4
                    },
                    principales_desafios: "string"
                },
                mvp: {
                    desarrollar_mvp: "string",
                    etapa: "string",
                    validado: "string",
                    problema_mvp: "string",
                    mayor_dificultad: "string"
                },
                talentos: {
                    incoporar_talento: "string",
                    cualidades: "string",
                    candidatos_evaluados: "string",
                    vertical: "string",
                    rol: "string",
                    desafios: "string"
                }
            },
            email: "string",
            whatsapp: "string"
        });

    const deepMerge = (target, source) => {
        for (const key of Object.keys(source)) {
            if (
                typeof source[key] === "object" &&
                source[key] !== null &&
                !Array.isArray(source[key])
            ) {
                if (!target[key]) {
                    target[key] = {}; // Si no existe el objeto, lo creamos
                }
                deepMerge(target[key], source[key]); // Llamada recursiva para fusionar
            } else {
                target[key] = source[key]; // Si no es un objeto, simplemente sobrescribimos
            }
        }
        return target;
    };

    //Funcion para actualizar el estado del formulario
    const updateFormData = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...deepMerge({ ...prevData }, newData)
        }));
    };

    return (
        <FormularioContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormularioContext.Provider>
    );
};
FormularioProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Hook para acceder al contexto desde cualquier componente
export const useFormulario = () => {
    return useContext(FormularioContext);
};