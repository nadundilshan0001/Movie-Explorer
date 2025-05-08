import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const MovieCard = () => (
  <Card sx={{ maxWidth: 200 }}>
    <CardMedia component="img" height="300"  alt="" />
    <CardContent>
      <Typography variant="subtitle1">title</Typography>
      <Typography variant="body2">year</Typography>
    </CardContent>
  </Card>
);

export default MovieCard;