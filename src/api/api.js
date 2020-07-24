import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/',
});

instance.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['apikey'] = '66614b47';
    return config;
});

export const moviesAPI = {
    getMovies(title) {
        return instance.get(`?s=${title}`)
            .then(response => response.data);
    },

    getSingleMovie(id) {
        return instance.get(`?i=${id}`)
            .then(response => response.data);
    }
}