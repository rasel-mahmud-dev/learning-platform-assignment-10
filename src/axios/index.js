import axios from "axios";

const backend = process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://e-coaching-server.vercel.app"

const api = axios.create({
    baseURL: backend,
});

export default api;
