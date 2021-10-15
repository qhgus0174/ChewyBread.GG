import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
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

export default reqSender;
