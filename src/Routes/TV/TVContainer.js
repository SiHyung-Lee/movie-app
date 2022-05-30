import React from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

class TVContainer extends React.Component {
    state = {
        onAir: null,
        airingToday: null,
        popular: null,
        topRated: null,
        error: null,
        loading: true,
    };

    componentDidMount = async () => {
        try {
            const {
                data: { results: onAir },
            } = await tvApi.onAir;

            const {
                data: { results: airingToday },
            } = await tvApi.airingToday;

            const {
                data: { results: popular },
            } = await tvApi.popular;

            const {
                data: { results: topRated },
            } = await tvApi.topRated;

            this.setState({
                onAir,
                airingToday,
                popular,
                topRated,
            });
        } catch {
            this.setState({
                error: "Can't find TV Show information",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };
    render() {
        const {
            onAir,
            airingToday,
            popular,
            topRated,
            error,
            loading,
        } = this.state;
        return (
            <TVPresenter
                onAir={onAir}
                airingToday={airingToday}
                popular={popular}
                topRated={topRated}
                error={error}
                loading={loading}
            />
        );
    }
}

export default TVContainer;
