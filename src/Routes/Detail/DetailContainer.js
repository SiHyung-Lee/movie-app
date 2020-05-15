import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api';

class DetailContainer extends React.Component {
    state = {
        result: '',
        creditsResult: '',
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
        console.log(this.isMovie);
        try {
            const request = this.isMovie
                ? await movieApi.detail(parseId)
                : await tvApi.detail(parseId);
            let result = request.data;
            const creditsRequest = await movieApi.credits(parseId);
            // const creditsRequest = this.isMovie
            //     ? await movieApi.credits(parseId)
            //     : await tvApi.credits(parseId);
            let creditsResult = creditsRequest;
            this.setState({
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
        const { result, creditsResult, loading } = this.state;
        console.log('this.props');
        return (
            <DetailPresenter
                result={result}
                creditsResult={creditsResult}
                loading={loading}
            />
        );
    }
}

export default DetailContainer;
