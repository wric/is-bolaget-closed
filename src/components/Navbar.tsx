import { HStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "@components/DarkModeSwitch";
import { InfoModal } from "@components/Modal";

export const Navbar = () => {
  return <HStack
    position="fixed"
    top="1rem"
    right="1rem"
  >
    <InfoModal />
    <DarkModeSwitch />
  </HStack>;
};
