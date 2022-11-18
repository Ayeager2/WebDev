import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <Menu />
        <Main>
          <NavBar />
          <Wrapper>Video Cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
