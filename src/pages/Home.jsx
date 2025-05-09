import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { fetchTrendingMovies, searchMovies } from "../api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(() => localStorage.getItem("lastSearch") || "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = async (newPage = 1, reset = false) => {
    try {
      setLoading(true);
      const res = search
        ? await searchMovies(search, newPage)
        : await fetchTrendingMovies(newPage);
      setMovies(prev =>
        reset || newPage === 1 ? res.data.results : [...prev, ...res.data.results]
      );
    } catch (err) {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  // Trigger when search changes
  useEffect(() => {
    localStorage.setItem("lastSearch", search);
    setPage(1);
    loadMovies(1, true);
  }, [search]);

  // Load more movies when page increases
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      {loading && movies.length === 0 ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {movies.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
            {/* loadmore button */}
          {movies.length > 0 && (
            <Button variant="contained" onClick={handleLoadMore} sx={{ mt: 3 }}>
              Load More
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
