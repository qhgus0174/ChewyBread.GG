import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Main from '~routes/Main';
import Summoner from '~routes/Summoner';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Container>
                <Route exact path="/" component={Main} />
                <Route exact path="/Summoner/:name" component={Summoner} />
            </Container>
        </BrowserRouter>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export default AppRouter;
