import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = 'df2d4dee44d982356f572c174844005c';
    config.params['language'] = 'en-US';
    config.params['page'] = 1;
    return config;
});

const movieApi = {
    nowPlaying: api.get('movie/now_playing'),
    upcoming: api.get('movie/upcoming'),
    topRated: api.get('movie/top_rated'),
    popular: api.get('movie/popular'),
    detail: (id) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    credits: (id) => api.get(`movie/${id}/credits`),
    search: (term) =>
        api.get('search/movie', {
            params: {
                query: term,
            },
        }),
};

const tvApi = {
    onAir: api.get('tv/on_the_air'),
    airingToday: api.get('tv/airing_today'),
    topRated: api.get('tv/top_rated'),
    popular: api.get('tv/popular'),
    detail: (id) =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    credits: (id) => api.get(`tv/${id}/credits`),
    search: (term) =>
        api.get('search/tv', {
            params: {
                query: term,
            },
        }),
};

export { movieApi, tvApi };
