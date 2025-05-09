import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const MovieCard = ({ movie }) => (
  <Card sx={{ maxWidth: 200 }}>
    <CardMedia component="img" height="300" image={movie.poster} alt={movie.title} />
    <CardContent>
      <Typography variant="subtitle1">{movie.title}</Typography>
      <Typography variant="body2">{movie.year}</Typography>
    </CardContent>
  </Card>
);

export default MovieCard;