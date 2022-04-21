import { QUERIES } from "./Queries";

export async function fetchApiEpisode1() {
  const { data } = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: QUERIES.episodes1 }),
  }).then((res) => res.json());

  return data;
}

export async function fetchApiEpisode2() {
  const { data } = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: QUERIES.episodes2 }),
  }).then((res) => res.json());

  return data;
}

export async function fetchApiEpisode3() {
  const { data } = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: QUERIES.episodes3 }),
  }).then((res) => res.json());

  return data;
}

export async function getCharacterByName(name) {
  const data = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `query {
        characters(filter: { name: `+`${name}`` }) {
          results {
          id
          name
          status
          species
          gender
        }
      }
    }
    `,
    }),
  }).then((res) => res.json());
  console.log(data)
  return data;
}
