import axios from 'axios';
const HOST = 'http://192.168.0.189:8080';
const API_URL = '/api/v1';

const api = axios.create({
    baseURL: `${HOST}${API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
