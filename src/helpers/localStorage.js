export function readFavoriteEpisodes() {
  return JSON.parse(localStorage.getItem('favorite_episodes'));
}

export function saveFavoriteEpisodes(props) { 
  const favorites = readFavoriteEpisodes();

  localStorage.setItem('favorite_episodes', JSON.stringify([...favorites, props]));
};

export function unfavoriteEpisodes(id) { 
  const favorites = readFavoriteEpisodes().filter((episode) => episode.id !== id);

  localStorage.setItem('favorite_episodes', JSON.stringify(favorites));
};

