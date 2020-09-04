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

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log(error)
        return Promise.reject(error);
    },
);

const { get, post, put, patch, delete: remove } = apiClient;


class HttpValidationErrors extends Error {
    constructor(props, errors) {
        super(props);

        this.errors = errors;
    }
}

export { get, post, put, patch, remove, HttpValidationErrors };
