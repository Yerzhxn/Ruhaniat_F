import axios from "axios";
import { API_URL } from "./env";

const api = axios.create({
    baseURL: API_URL+'/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {
        populate: '*'
    }
})

export default api;