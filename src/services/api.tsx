import axios from 'axios';

// API do github
const api = axios.create({
    baseURL: 'https://api.github.com/',
})

export default api