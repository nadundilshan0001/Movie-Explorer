import { useContext } from "react";
import { ColorModeContext } from "../contexts/ThemeContext";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const ThemeToggle = () => {
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      <Brightness4Icon />
    </IconButton>
  );
};

export default ThemeToggle;
