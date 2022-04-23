import React, { useState } from 'react'
import { useEffect } from 'react';
import { readFavoriteEpisodes, saveFavoriteEpisodes, unfavoriteEpisodes } from '../helpers/localStorage';
import { CardContainer, LinkCardContainer, FavoriteCheckBox, FavoriteLabel } from '../styles/EpisodeCard.styles'

export default function EpisodeCard(props) {
  const { id, name, air_date, characters } = props;

  const [checked, setChecked] = useState('');

  function checkChecked() {
    const favorites = readFavoriteEpisodes().map((episode) => episode.id);
    
    setChecked(favorites.includes(id));
  }

  function handleChange({ target }) {
    if (!checked) {
      saveFavoriteEpisodes(props)
      setChecked(true);
    } else {
      unfavoriteEpisodes(id)
      setChecked(false)
    }
  }

  useEffect(() => {
    checkChecked();
  }, [])

  return (
    <CardContainer>
      <LinkCardContainer to={`/episodes/${id}`}>
        <div style={{ backgroundColor: '#1e2838', color: 'white'}}>
          <p><strong>{ `Episódio Nº ${id}`}</strong></p>
        </div>
        <p>{name}</p>
        <p>{ `Personagens: ${characters.length - 1}` }</p>
        <p>{air_date}</p>
      </LinkCardContainer>
      <FavoriteLabel>
        <FavoriteCheckBox 
          type='checkbox'
          onChange={ handleChange }
          checked={ checked }
        />
        </FavoriteLabel>
    </CardContainer>
  )
}
