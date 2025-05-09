// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { fetchTrendingMovies, searchMovies } from "../api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadMovies = async () => {
    try {
      setLoading(true);
      const res = search
        ? await searchMovies(search)
        : await fetchTrendingMovies();
      setMovies(res.data.results);
    } catch (err) {
      setError("Failed to load movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [search]);

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
