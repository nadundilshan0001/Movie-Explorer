// src/components/MovieCard.jsx
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea onClick={() => navigate(`/movie/${movie.id}`)}>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography variant="subtitle1">{movie.title}</Typography>
          <Typography variant="body2">{movie.release_date?.split("-")[0]}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
