import { Box, Heading } from "@chakra-ui/react";

type Props = { title: string };

export const Hero = ({ title }: Props) => {
  return <Box
    display="inline"
    bgGradient="linear(to-l, #5B86E5, #36D1DC)"
    pt={24}
    pb={2}
    bgClip="text"
    maxWidth="32rem"
  >
    <Heading fontSize="2.25rem">{title}</Heading>
  </Box>;
};
