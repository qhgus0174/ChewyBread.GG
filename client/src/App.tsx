import React from 'react';
import AppRouter from './Router';
import { basic } from '~styles/theme';
import { ThemeProvider } from '@emotion/react';

const App = () => {
    return (
        <ThemeProvider theme={basic}>
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
