import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${BACKEND_ENDPOINT}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
};