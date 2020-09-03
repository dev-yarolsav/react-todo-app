import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

apiClient.interceptors.request.use((config) => {
        return ({
            ...config,
            headers: {

            },
        })
    },
    error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
    response,
    async (error) => {
        return Promise.reject(error.response.data);
    },
);

const { get, post, put, patch, delete: remove } = apiClient;

export { get, post, put, patch, remove };