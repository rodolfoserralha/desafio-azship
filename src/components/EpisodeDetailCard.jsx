import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/Context';
import { getCharacterByName } from '../helpers/fetchApi';

export default function EpisodeDetailCard() {
  const { episodes, setEpisodes, characters, setCharacters } = useContext(Context);
  const [episodeInfo, setEpisodeInfo] = useState('');
  const { id } = useParams();

  const lucy =         {
    "id": "210",
    "name": "Lucy",
    "status": "Dead",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/210.jpeg"
  }

  async function fetchCharacters() {
    const [filteredEpisode] = episodes.filter((episode) => episode.id === id);
    setEpisodeInfo(filteredEpisode)
    
    // filteredEpisode.characters[0].map((character) => {
    //   return getCharacterByName(character.name)
    // })

    // await filteredEpisode.characters.map((character) => {
    //   const result = getCharacterByName(character.name)
    //   console.log(result)
    // })
  }

  // useEffect(() => {
  //   fetchCharacters();
  // }, [])

  return (
    <div>
      
    </div>
  )
}
