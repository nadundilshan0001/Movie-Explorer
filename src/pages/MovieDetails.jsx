// src/pages/MovieDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api";
import {
  Container,
  Typography,
  CircularProgress,
  Chip,
  Box,
} from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      const res = await getMovieDetails(id);
      setMovie(res.data);
      setLoading(false);
    };
    loadDetails();
  }, [id]);

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  if (!movie) return <Typography>Error loading movie.</Typography>;

  const trailer = movie.videos?.results.find((v) => v.type === "Trailer");

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{movie.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>
        {movie.release_date} | Rating: {movie.vote_average}
      </Typography>
      <Box sx={{ mb: 2 }}>
        {movie.genres.map((genre) => (
          <Chip key={genre.id} label={genre.name} sx={{ mr: 1 }} />
        ))}
      </Box>
      <Typography paragraph>{movie.overview}</Typography>
      {trailer && (
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allowFullScreen
          title="Trailer"
        ></iframe>
      )}
    </Container>
  );
};

export default MovieDetails;
