import React from 'react';
import MoviePresenter from "./MoviePresenter";
import { moviesApi } from "../../api";

export default class MovieContainer extends React.Component {
    state = {
        nowPlaying: null,
        upcomming: null,
        popular: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const {data: {results: nowPlaying}} = await moviesApi.nowPlayng();
            const {data: {results: upcomming}} = await moviesApi.upcomming();
            const {data: {results: popular}} = await moviesApi.popular();
            this.setState({
                nowPlaying, upcomming, popular
            });
            
        } catch {
            this.setState({
                error: "Can't find movie information."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const { nowPlaying, upcomming, popular, error, loading } = this.state;
        return (
            <MoviePresenter
                nowPlaying={nowPlaying}
                upcomming={upcomming}
                popular={popular}
                error={error}
                loading={loading}
            />
        )
    }
}
