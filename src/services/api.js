import axios from 'axios';

const api = axios.create({
    baseURL : 'https://kelvin-box.herokuapp.com'
});

export default api;