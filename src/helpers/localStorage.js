export function readFavoriteEpisodes() {
  return JSON.parse(localStorage.getItem('favorite_episodes'));
}

export function readViewedEpisodes() {
  return JSON.parse(localStorage.getItem('viewed_episodes'));
}

export function saveFavoriteEpisodes(props) { 
  const favorites = readFavoriteEpisodes();

  localStorage.setItem('favorite_episodes', JSON.stringify([...favorites, props]));
};

export function unfavoriteEpisodes(id) { 
  const favorites = readFavoriteEpisodes().filter((episode) => episode.id !== id);

  localStorage.setItem('favorite_episodes', JSON.stringify(favorites));
};

export function saveViewedEpisodes(props) {
  const viewed = readViewedEpisodes();
  localStorage.setItem('viewed_episodes', JSON.stringify([...viewed, props]));
}

export function unViewedEpisodes(id) { 
  const viewed = readViewedEpisodes().filter((episode) => episode.id !== id);

  localStorage.setItem('viewed_episodes', JSON.stringify(viewed));
};

