import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/Context';
import { filterCharacterByName } from '../helpers/fetchApi';
import { CardList } from '../styles/CharacterCard.styles';
import CharacterCard from './CharacterCard';

export default function EpisodeDetailCard() {
  const { episodes } = useContext(Context);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);
  const { id } = useParams();


  async function fetchCharacters() {
    const [filteredEpisode] = episodes.filter((episode) => episode.id === id);
    const array = [];
    console.log(filteredEpisode);
  
    await Promise.all(filteredEpisode.characters.map(async (char) => {
      const result = await filterCharacterByName(char.name);
      return array.push(result);
    }))
    
    setEpisodeCharacters(array);
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <CardList>
      { 
        episodeCharacters.map((char) => {
          return <CharacterCard key={char.id} name={char.name} specie={char.species} status={char.status} image={char.image} />
        })
      }
    </CardList>
  )
}
