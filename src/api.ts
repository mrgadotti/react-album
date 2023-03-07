// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.0.190:8000/marcelo/",
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    timeout: 30000,
});

export default api;
