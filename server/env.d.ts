declare namespace NodeJS {
    interface ProcessEnv {
        /** node environment */
        SERVER_API_KEY: string;
        SERVER_BASE_URL: string;
        SERVER_PORT: string;
    }
}
