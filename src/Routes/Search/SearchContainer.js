import React from 'react';
import { movieApi, tvApi } from '../../api';
import SearchPresenter from './SearchPresenter';

class Search extends React.Component {
    state = {
        searchTerm: '',
        movieResults: null,
        tvResults: null,
        error: '',
        loading: true,
    };

    handleChangeInput = (event) => {
        this.setState({
            searchTerm: event.target.value,
        });
    };

    handleSubmitSearch = async (event) => {
        event.preventDefault();

        try {
            const {
                data: { results: movieResults },
            } = await movieApi.search(this.state.searchTerm);

            const {
                data: { results: tvResults },
            } = await tvApi.search(this.state.searchTerm);

            this.setState({
                movieResults,
                tvResults,
            });
        } catch {
            this.setState({
                error: "Can't find results",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const { searchTerm, movieResults, tvResults, loading } = this.state;
        return (
            <SearchPresenter
                searchTerm={searchTerm}
                movieResults={movieResults}
                tvResults={tvResults}
                loading={loading}
                handleChangeInput={this.handleChangeInput}
                handleSubmitSearch={this.handleSubmitSearch}
            />
        );
    }
}

export default Search;
