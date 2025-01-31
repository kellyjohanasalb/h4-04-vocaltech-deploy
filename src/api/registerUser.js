import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BACKEND_ENDPOINT}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
};