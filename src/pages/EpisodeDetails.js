import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeDetailCard from "../components/EpisodeDetailCard";
import Context from "../context/Context";
import {
  EpisodeDetailContainer,
  EpisodeTitle,
} from "../styles/EpisodeDetail.styles";
import Header from "../components/Header";

export default function EpisodeDetails() {
  const { episodes, setEpisodes, characters, setCharacters } =
    useContext(Context);
  const [episodeInfo, setEpisodeInfo] = useState("");
  const { id } = useParams();

  async function fetchCharacters() {
    const [filteredEpisode] = episodes.filter((episode) => episode.id === id);
    setEpisodeInfo(filteredEpisode);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Header />
      <EpisodeDetailContainer>
        <EpisodeTitle>{`Episódio N ${episodeInfo.id} - ${episodeInfo.name} - ${episodeInfo.air_date}`}</EpisodeTitle>
        <EpisodeDetailCard />
      </EpisodeDetailContainer>
    </>
  );
}
