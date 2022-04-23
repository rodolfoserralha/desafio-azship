import React from 'react'
import { CharacterCardContainer, CharacterImg, CharacterName, CharacterSpecie, CharacterStatus } from '../styles/CharacterCard.styles'

export default function CharacterCard(props) {
  const { name, specie, status, image } = props
  
  return (
    <CharacterCardContainer>
      <CharacterImg src={image} alt="char-img"/>
      <CharacterName>{name}</CharacterName>
      <CharacterSpecie>{`Espécie: ${specie}`}</CharacterSpecie>
      <CharacterStatus>{ `Status: ${status}`}</CharacterStatus>
    </CharacterCardContainer>
  )
}
