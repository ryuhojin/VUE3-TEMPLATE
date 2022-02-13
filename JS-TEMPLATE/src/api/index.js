import axios from "axios";

const service = axios.create({
    baseURL: "http://0.0.0.0/api",
    withCredentials: true,
});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;