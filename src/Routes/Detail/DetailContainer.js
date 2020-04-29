import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi } from '../../api';

class DetailContainer extends React.Component {
    state = {
        pathname: null,
        loading: true,
    };
    componentDidMount = async () => {
        try {
            const {
                data: { location: pathname },
            } = await movieApi.movieDetail;

            this.setState({
                pathname,
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
    render() {
        console.log(this.props);
        return <></>;
    }
}

export default DetailContainer;
