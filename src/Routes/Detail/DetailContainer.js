import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi } from '../../api';

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

        try {
            const request = await movieApi.detail(parseId);
            let result = request.data;
            const creditsRequest = await movieApi.credits(parseId);
            let creditsResult = creditsRequest;
            //console.log(creditsRequest);
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
        //console.log(result);
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
