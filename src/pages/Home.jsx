// src/pages/Home.jsx
import { Grid, Container } from "@mui/material";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

const mockMovies = [
  { title: "Inception", year: "2010", poster: "https://via.placeholder.com/200x300" },
  { title: "Interstellar", year: "2014", poster: "https://via.placeholder.com/200x300" },
];

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <Grid container spacing={2}>
        {mockMovies.map((movie, i) => (
          <Grid item key={i}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
