import React, { useEffect, useState, useContext } from "react";
import EpisodeCard from "../components/EpisodeCard";
import Header from "../components/Header";
import Loading from "../components/Loading";
import {
  fetchApiEpisode1,
  fetchApiEpisode2,
  fetchApiEpisode3,
} from "../helpers/fetchApi";
import {
  GridContainer,
  NumberPageBtn,
  PageNumberContainer,
  SearchInput,
  SearchInputContainer,
} from "../styles/Episodes.styles";
import Context from "../context/Context";

export default function Episodes() {
  const [selection, setSelection] = useState("1");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(12);
  const [loading, setLoading] = useState(false);

  const { episodes, setEpisodes } = useContext(Context);

  async function fetchApis() {
    if (episodes.length > 2) return;
    setLoading(true);

    const [first, second, third] = await Promise.all([
      fetchApiEpisode1(),
      fetchApiEpisode2(),
      fetchApiEpisode3(),
    ]);

    setEpisodes([
      ...first.episodes.results,
      ...second.episodes.results,
      ...third.episodes.results,
    ]);

    setLoading(false);
  }

  function handleClick({ target }) {
    setSelection(target.value);
    if (target.value === "1") {
      setFrom(0);
      setTo(12);
    }
    if (target.value === "2") {
      setFrom(12);
      setTo(24);
    }
    if (target.value === "3") {
      setFrom(24);
      setTo(36);
    }
    if (target.value === "4") {
      setFrom(36);
      setTo(48);
    }
    if (target.value === "5") {
      setFrom(48);
      setTo(55);
    }
  }

  useEffect(() => {
    fetchApis();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="Pesquisar por nome do episódio"
            />
          </SearchInputContainer>
          <GridContainer>
            {episodes?.slice(from, to).map((episode) => {
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
              selected={selection === "1"}
              value={1}
            >
              1
            </NumberPageBtn>
            <NumberPageBtn
              onClick={handleClick}
              selected={selection === "2"}
              value={2}
            >
              2
            </NumberPageBtn>
            <NumberPageBtn
              onClick={handleClick}
              selected={selection === "3"}
              value={3}
            >
              3
            </NumberPageBtn>
            <NumberPageBtn
              onClick={handleClick}
              selected={selection === "4"}
              value={4}
            >
              4
            </NumberPageBtn>
            <NumberPageBtn
              onClick={handleClick}
              selected={selection === "5"}
              value={5}
            >
              5
            </NumberPageBtn>
          </PageNumberContainer>
        </>
      )}
    </>
  );
}
