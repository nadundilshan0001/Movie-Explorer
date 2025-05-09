import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, IconButton } from "@mui/material";
import { getDesignTheme } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  const [mode, setMode] = useState("light");
  const theme = getDesignTheme(mode);

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <IconButton
            onClick={toggleTheme}
            sx={{ position: "fixed", top: 10, right: 10 }}
          >
            <Brightness4Icon />
          </IconButton>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
