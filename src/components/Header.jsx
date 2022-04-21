import React from 'react'
import { HeaderContainer } from '../styles/Header.styles'
import image from '../images/Rick-And-Morty-Emblem.png'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={image} alt="rick-logo" />
      <h1>Episódios Favoritos</h1>
    </HeaderContainer>
  )
}
