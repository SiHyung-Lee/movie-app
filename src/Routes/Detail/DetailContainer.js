import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi } from '../../api';

class DetailContainer extends React.Component {
    state = {
        result: '',
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
            this.setState({
                result,
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
        const { result, loading } = this.state;
        console.log(result);
        return <DetailPresenter result={result} loading={loading} />;
    }
}

export default DetailContainer;
