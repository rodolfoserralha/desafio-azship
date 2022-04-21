import React, { useEffect, useState } from "react";
import EpisodeCard from "../components/EpisodeCard";
import Header from "../components/Header";
import {
  fetchApiEpisode1,
  fetchApiEpisode2,
  fetchApiEpisode3,
} from "../helpers/fetchApi";
import {
  GridContainer,
  NumberPageBtn,
  PageNumberContainer,
} from "../styles/Episodes.styles";

export default function Episodes() {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [selection, setSelection] = useState('1');
  const [limitCards, setLimitCards] = useState(0, 12);

  async function fetchApis() {
    const [first, second, third] = await Promise.all([
      fetchApiEpisode1(),
      fetchApiEpisode2(),
      fetchApiEpisode3(),
    ]);

    setAllEpisodes([
      ...first.episodes.results,
      ...second.episodes.results,
      ...third.episodes.results,
    ]);
  }

  function handleClick({ target }) {
    setSelection(target.value);
    if (target.value === '1') setLimitCards(Number('0, 12'))
    if (target.value === '2') setLimitCards(Number('13, 23'))
    if (target.value === '3') setLimitCards('24, 36')
    if (target.value === '4') setLimitCards('37, 49')
    if (target.value === '5') setLimitCards('50, 55')
  }

  useEffect(() => {
    fetchApis();
  }, []);

  return (
    <>
      <Header />
      <GridContainer>
        {allEpisodes?.slice(0, 12).map((episode) => {
          return (
            <EpisodeCard
              key={episode.id}
              name={episode.name}
              characters={episode.characters}
              id={episode.id}
              air_date={episode.air_date}
            />
          );
        })}
      </GridContainer>
      <PageNumberContainer>
        <NumberPageBtn
          onClick={handleClick}
          selected={selection === '1'}
          value={1}
        >
          1
        </NumberPageBtn>
        <NumberPageBtn
          onClick={handleClick}
          selected={selection === '2'}
          value={2}
        >
          2
        </NumberPageBtn>
        <NumberPageBtn
          onClick={handleClick}
          selected={selection === '3'}
          value={3}
        >
          3
        </NumberPageBtn>
        <NumberPageBtn
          onClick={handleClick}
          selected={selection === '4'}
          value={4}
        >
          4
        </NumberPageBtn>
        <NumberPageBtn
          onClick={handleClick}
          selected={selection === '5'}
          value={5}
        >
          5
        </NumberPageBtn>
      </PageNumberContainer>
    </>
  );
}
