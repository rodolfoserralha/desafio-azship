import React from 'react'
import { HeaderContainer, HeaderLink } from '../styles/Header.styles'
import image from '../images/Rick-And-Morty-Emblem.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={image} alt="rick-logo" />
      <HeaderLink to="/episodes/favorites">Episódios Favoritos</HeaderLink>
    </HeaderContainer>
  )
}
