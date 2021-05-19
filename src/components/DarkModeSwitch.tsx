import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      size="sm"
      colorScheme="gray"
      aria-label="Toggle darkmode"
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
};
