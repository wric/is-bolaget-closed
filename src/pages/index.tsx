import { Container } from "@components/Container";
import { Hero } from "@components/Hero";
import { Navbar } from "@components/Navbar";
import { SearchList } from "@components/Search";

const Index = () => (
  <Container height="100vh">
    <Navbar />
    <Hero title="Is bolaget closed?" />
    <SearchList />
  </Container>
);

export default Index;
