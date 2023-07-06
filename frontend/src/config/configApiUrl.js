import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://elecstorse-dqhf.onrender.com',
    // baseURL: process.env.BASE_API_URL,
});
