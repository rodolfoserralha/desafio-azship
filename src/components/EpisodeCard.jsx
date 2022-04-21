import React from 'react'
import { Link } from 'react-router-dom'
import { CardContainer, LinkCardContainer, FavoriteBtn } from '../styles/EpisodeCard.styles'

export default function EpisodeCard(props) {
  const { id, name, air_date, characters } = props

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
      {/* <FavoriteBtn></FavoriteBtn>  */}
    </CardContainer>
  )
}
