import { TextField } from "@mui/material";

const SearchBar = ({ value, onChange }) => (
  <TextField
    fullWidth
    label="Search for a movie"
    variant="outlined"
    margin="normal"
    value={value}
    onChange={onChange}
  />
);

export default SearchBar;