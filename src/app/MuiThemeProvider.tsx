"use client";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import React from 'react';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
            light: '#d3b8f1',
            dark: '#1b1b1b',
        },
        secondary: {
            main: '#818181',
            light: '#8080fb',
            dark: '#2c077f',
        },
        divider: 'rgba(0,0,0,0.09)',
    },
};

const theme = createTheme(themeOptions);

interface ProviderProps {
    children?: React.ReactNode
}

export default function MuiThemeProvider(props: ProviderProps) {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
