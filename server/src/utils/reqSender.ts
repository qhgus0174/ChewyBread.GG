import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';

const reqSender: AxiosInstance = axios.create({
    baseURL: config.riotBaseUrl,
});

reqSender.interceptors.request.use(
    (axiosReqConfig: AxiosRequestConfig) => {
        try {
            axiosReqConfig.headers['X-Riot-Token'] = config.riotApiKey;

            return axiosReqConfig;
        } catch (e) {
            throw e;
        }
    },
    (error: AxiosError<any>) => {
        Promise.reject(error);
    },
);

reqSender.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        return response;
    },
    (error: AxiosError<any>) => {
        return Promise.reject(error);
    },
);

export default reqSender;
