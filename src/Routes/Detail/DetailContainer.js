import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi } from '../../api';

class DetailContainer extends React.Component {
    state = {
        result: null,
        loading: true,
        result: null,
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
                result,
            });
        } catch {
            console.log('aaaaa');
        } finally {
            console.log('end');
        }
    };

    render() {
        //console.log(this.state.movieDetail);
        const { result } = this.state;
        return <DetailPresenter result={result} />;
    }
}

export default DetailContainer;
