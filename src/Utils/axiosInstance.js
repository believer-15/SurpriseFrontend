import axios from "axios";

// Create an new axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
}); 

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// axiosInstance.defaults.withCredentials =  true; // Send cookies with every request

export default axiosInstance;