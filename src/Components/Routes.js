import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';

const Contents = styled.article`
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    box-sizing: border-box;
`;

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Contents>
                    <Route path='/' exact component={Home} />
                    <Route path='/tv' exact component={TV} />
                    <Route path='/search' exact component={Search} />
                    <Route path='/movie/:id' component={Detail} />
                    <Route path='/show/:id' component={Detail} />
                </Contents>
            </Router>
        );
    }
}

export default Routes;
