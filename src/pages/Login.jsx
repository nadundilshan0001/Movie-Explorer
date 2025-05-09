import { Button, TextField, Container, Typography } from "@mui/material";

const Login = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h5" align="center" gutterBottom>Login</Typography>
      <TextField fullWidth label="Username" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button fullWidth variant="contained" sx={{ mt: 2 }} href="/home">Login</Button>
    </Container>
  );
};

export default Login;
