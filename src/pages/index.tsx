import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { SearchList } from "../components/SearchList";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main />
    <SearchList />
    <DarkModeSwitch />
  </Container>
);

export default Index;
