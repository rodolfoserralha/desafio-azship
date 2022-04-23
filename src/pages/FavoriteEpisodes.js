import React from "react";
import { useState } from "react";
import EpisodeCard from "../components/EpisodeCard";
import GoBack from "../components/GoBack";

import Header from "../components/Header";
import { readFavoriteEpisodes } from "../helpers/localStorage";
import { GridContainer } from "../styles/Episodes.styles";

export default function FavoriteEpisodes() {
  const storage = readFavoriteEpisodes();

  return (
    <>
      <Header />
      <GoBack />
      <GridContainer>
        {storage?.map((favorite) => {
          return (
            <EpisodeCard
              key={favorite.id}
              name={favorite.name}
              characters={favorite.characters}
              id={favorite.id}
              air_date={favorite.air_date}
            />
          );
        })}
      </GridContainer>
    </>
  );
}
