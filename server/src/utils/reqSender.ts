import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../config';

const reqSender = axios.create({
    baseURL: config.riotBaseUrl,
});

reqSender.interceptors.request.use(
    (axiosReqConfig: AxiosRequestConfig | any) => {
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
        const { data } = response;
        return data;
    },
    (error: AxiosError<any>) => {
        return Promise.reject(error);
    },
);

export default reqSender;
