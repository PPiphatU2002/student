import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header.js';

const sections = [
  { title: 'Open Subject', url: '/class' }
];
const theme = createTheme();
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />

      </Container>
      
    </ThemeProvider>
  );
}