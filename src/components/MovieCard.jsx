import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconButton, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { saveFavorite } from "../utils/localStorage";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

   const handleFavorite = () => {
    saveFavorite(movie);
    alert("Movie saved to favorites!");
  };

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
      <CardActions>
        <IconButton onClick={handleFavorite} color="secondary">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
