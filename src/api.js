import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

// Usando la variable de entorno de Vite para el backend en localhost:8080
const api = axios.create({
    // baseURL: 'http://127.0.0.1:8080',
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api