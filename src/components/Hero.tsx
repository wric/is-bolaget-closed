import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, #5B86E5, #36D1DC)"
    pt={32}
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "is-bolaget-open",
};
