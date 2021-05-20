import { Flex, Heading } from "@chakra-ui/react";

type Props = { title: string };

export const Hero = ({ title }: Props) => {
  return <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, #5B86E5, #36D1DC)"
    pt={24}
    pb={2}
    bgClip="text"
    maxWidth="32rem"
  >
    <Heading display="inline" fontSize="2.25rem">{title}</Heading>
  </Flex>;
};
