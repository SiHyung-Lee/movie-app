import React from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from '../../api';

class HomeContainer extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        topRated: null,
        error: null,
        loading: true,
    };

    handleLoadMovies = async () => {
        try {
            const {
                data: { results: nowPlaying },
            } = await movieApi.nowPlaying;

            const {
                data: { results: upcoming },
            } = await movieApi.upcoming;

            const {
                data: { results: popular },
            } = await movieApi.popular;

            const {
                data: { results: topRated },
            } = await movieApi.topRated;

            this.setState({
                nowPlaying,
                upcoming,
                popular,
                topRated,
            });
        } catch {
            this.setState({
                error: "Can't find movie information",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    componentDidMount() {
        this.handleLoadMovies();
    }

    render() {
        const {
            nowPlaying,
            upcoming,
            popular,
            topRated,
            error,
            loading,
        } = this.state;
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                topRated={topRated}
                error={error}
                loading={loading}
            />
        );
    }
}

export default HomeContainer;
