const FAVORITES_KEY = "favorite_movies";

export const getFavorites = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFavorite = (movie) => {
  const favorites = getFavorites();
  const exists = favorites.find((m) => m.id === movie.id);
  if (!exists) {
    favorites.push(movie);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFavorite = (id) => {
  const updated = getFavorites().filter((m) => m.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
};
