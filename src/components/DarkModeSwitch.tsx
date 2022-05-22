import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useSound from "use-sound";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [playSwitchSound] = useSound("/sounds/lightSwitch.mp3", {
    volume: 0.25,
  });

  function handleChangeMood() {
    playSwitchSound();
    toggleColorMode();
  }
  return (
    <IconButton
      onClick={handleChangeMood}
      position="fixed"
      top={10}
      right={4}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      color="primary"
      fontSize="20px"
    />
  );
};
