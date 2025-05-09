import { createTheme } from "@mui/material/styles";

export const getDesignTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
  });
