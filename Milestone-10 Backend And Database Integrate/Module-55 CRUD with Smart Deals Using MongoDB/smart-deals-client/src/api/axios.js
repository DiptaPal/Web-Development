import axios from "axios";


const api = axios.create({
    baseURL: "https://smart-deals-server-lemon.vercel.app"
});

export default api;