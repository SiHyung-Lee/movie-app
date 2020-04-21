import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Home from '../Routes/Home/';
import TV from '../Routes/TV/TVContainer';
import Search from '../Routes/Search/SearchContainer';

const Contents = styled.article`
    width: 100%;
    padding: 50px;
`;

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Contents>
                    <Route path="/" exact component={Home} />
                    <Route path="/tv" exact component={TV} />
                    <Route path="/search" exact component={Search} />
                </Contents>
            </Router>
        );
    }
}

export default Routes;
