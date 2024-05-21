import './App.css';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation';
import { Home } from './components/home/home';
import { darkTheme, lightTheme } from './utils/Themes';
import React, { useState } from 'react';
import { Footer } from './components/footer/footer';


// Estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.nav};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  }
`;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 30%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 90%
  );

`;

const Wrapper = styled.div`
  border-radius: 30px;
  background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 30%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 90%
  );
width: 100%;

clip-path: circle(65% at center);

`;


function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme }>
      {/* Utilize o componente AppContainer para envolver toda a barra de navegação e conteúdo */}
      <Router>
      <AppContainer>
        <GlobalStyle />
          <Navigation isDark={isDark} setIsDark={setIsDark} />
          <Wrapper>
            <Home isDark={isDark} darkTheme={darkTheme} lightTheme={lightTheme} />
            <div style={{height: '100vh'}}></div>
          </Wrapper>
          <Footer />
      </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
