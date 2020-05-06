import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi } from '../../api';

class DetailContainer extends React.Component {
    state = {
        title: '',
        overview: '',
        release: '',
        average: 0,
        genres: '',
        poster: '',
        loading: true,
    };

    componentDidMount = async () => {
        const {
            match: {
                params: { id },
            },
            history: { push },
            location: { pathname },
        } = this.props;
        const parseId = parseInt(id);
        this.isMovie = pathname.includes('/movie/');
        try {
            const request = await movieApi.movieDetail(parseId);
            let result = request.data;
            this.setState({
                title: result.title,
                overview: result.overview,
                release: result.release_date,
                average: result.vote_average,
                genres: result.genres,
                poster: result.poster_path,
            });
        } catch {
            console.log('aaaaa');
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const {
            title,
            overview,
            release,
            average,
            genres,
            poster,
            loading,
        } = this.state;
        return (
            <DetailPresenter
                title={title}
                overview={overview}
                release={release}
                average={average}
                genres={genres}
                poster={poster}
                loading={loading}
            />
        );
    }
}

export default DetailContainer;
