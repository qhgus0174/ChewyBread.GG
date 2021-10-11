import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Main from '~routes/Main';

const AppRouter = () => {
    return (
        <BrowserRouter basename="ChewyB">
            <Container>
                <Route exact path="/" component={Main} />
            </Container>
        </BrowserRouter>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export default AppRouter;
