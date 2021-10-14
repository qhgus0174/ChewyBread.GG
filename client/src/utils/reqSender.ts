import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const reqSender: AxiosInstance = axios.create();

reqSender.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        return response.data;
    },
    (error: AxiosError<any>) => {
        return Promise.reject(error);
    },
);

export default reqSender;
