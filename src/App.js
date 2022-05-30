import React from 'react';
import Routes from './Components/Routes';
import styled from 'styled-components';
import GlobalStyles from './Components/GlobalStyles';
import 'typeface-source-sans-pro';

const Viewport = styled.div`
    display: flex;
    flex: 1 1 auto;
    min-height: 100%;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
    padding-top: 64px;
`;

function App() {
    return (
        <Viewport>
            <Routes />
            <GlobalStyles />
        </Viewport>
    );
}

export default App;
