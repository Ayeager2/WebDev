import styled from "styled-components";
import { Menu } from "./components/Menu";
import { NavBar } from "./components/NavBar";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div``;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <NavBar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
