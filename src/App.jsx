import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar';
import HeroOdyssey from './components/HeroOdyssey';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CosmosBackground from './components/CosmosBackground';

// Tema gelap (Dark Theme) agar Cosmos terlihat
const darkTheme = {
  colors: {
    background: '#000000',
    surface: 'rgba(255, 255, 255, 0.05)', // Kaca transparan
    primary: '#ff4b4b',
    primaryHover: '#e63e3e',
    textMain: '#FFFFFF',
    textMuted: '#A0AEC0',
    border: 'rgba(255, 255, 255, 0.1)'
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
    color: ${props => props.theme.colors.textMain};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    transition: all 0.3s ease;
  }
`;

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Navbar />
            <main className="relative">
                {/* Wrapper for Hero to stay on top of Cosmos */}
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <HeroOdyssey />
                </div>
                
                <CosmosBackground />
                
                {/* Wrapper for content that goes over Cosmos */}
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <About />
                    <Portfolio />
                    <Hobbies />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </ThemeProvider>
    );
}
