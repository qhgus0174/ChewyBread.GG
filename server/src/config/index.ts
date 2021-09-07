import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error('⚠️  .env 파일 찾을 수 없음!  ⚠️');
}

export default {
    port: parseInt(process.env.SERVER_PORT || '1234', 10),
    riotBaseUrl: process.env.SERVER_BASE_URL,
    riotApiKey: process.env.SERVER_API_KEY,
};
