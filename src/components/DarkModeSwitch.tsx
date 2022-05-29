import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useSound from "use-sound";
import { useTheme } from "next-themes";

export const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [playSwitchSound] = useSound("/sounds/lightSwitch.mp3", {
    volume: 0.25,
  });

  function handleChangeMood() {
    playSwitchSound();
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
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
