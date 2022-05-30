import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api';

class DetailContainer extends React.Component {
    state = {
        isMovie: true,
        result: null,
        creditsResult: null,
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
            const request = this.isMovie
                ? await movieApi.detail(parseId)
                : await tvApi.detail(parseId);

            let result = request.data;

            const creditsRequest = this.isMovie
                ? await movieApi.credits(parseId)
                : await tvApi.credits(parseId);

            let creditsResult = creditsRequest;

            this.setState({
                isMovie: this.isMovie,
                result,
                creditsResult,
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
        const { isMovie, result, creditsResult, loading } = this.state;
        return (
            <DetailPresenter
                isMovie={isMovie}
                result={result}
                creditsResult={creditsResult}
                loading={loading}
            />
        );
    }
}

export default DetailContainer;
