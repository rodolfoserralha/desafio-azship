import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeDetailCard from "../components/EpisodeDetailCard";
import Context from "../context/Context";
import {
  EpisodeDate,
  EpisodeDetailContainer,
  EpisodeTitle,
  TitleDateContainer,
} from "../styles/EpisodeDetail.styles";
import Header from "../components/Header";
import { MainDiv } from "../styles/EpisodeDetailsCard.styles";
import GoBack from "../components/GoBack";

export default function EpisodeDetails() {
  const { episodes } =
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
    <MainDiv>
      <Header />
      <EpisodeDetailContainer>
        <GoBack />
        <TitleDateContainer>
          <EpisodeTitle>{`Episódio N ${episodeInfo.id} - ${episodeInfo.name}`}</EpisodeTitle>
          <EpisodeDate>{episodeInfo.air_date}</EpisodeDate>
          <h2>Personagens presentes no episódio:</h2>
        </TitleDateContainer>
      </EpisodeDetailContainer>
      <EpisodeDetailCard />
    </MainDiv>
  );
}
