import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "00c417469da0dcffd132da35c9d1aefd",
        language: "en-US"
    }
});

api.get("tv/popular");


export const moviesApi = {
    nowPlayng: () => {
        return api.get("movie/now_playing");
    },
    upcomming: () => {
        return api.get("movie/upcoming");
    },
    popular: () => {
        return api.get("movie/popular");
    },
    movieDetail: (id) => {
        return api.get(`movie/${id}`, {
            params: {
                append_to_response: "videos"
            }
        });
    },
    search: (term) => {
        return api.get('search/movie', {
            params: {
                query: encodeURIComponent(term)
            }
        })
    }
}

export const tvApi = {
    topRated: () => {
        return api.get("tv/top_rated");
    },
    popular: () => {
        return api.get("tv/popular");
    },
    airingToday: () => {
        return api.get("tv/airing_today");
    },
    showDetail: (id) => {
        return api.get(`tv/${id}`, {
            params: {
                append_to_response: "videos"
            }
        });
    },
    search: (term) => {
        return api.get('search/tv', {
            params: {
                query: encodeURIComponent(term)
            }
        })
    }
}