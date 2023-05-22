import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header.js';
import title from './title.css';

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
        <img
        src={`https://wallpaperaccess.com/full/562430.jpg`}
        srcSet={`https://wallpaperaccess.com/full/562430.jpg`}
        alt={`https://wallpaperaccess.com/full/562430.jpg`}
        style={{ width: 1160, height: 600 }}
      />
      </Container>
      
    </ThemeProvider>
  );
}