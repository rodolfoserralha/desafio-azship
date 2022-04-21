import React from 'react'
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from '../styles/CheckBox.styles'
import { FavoriteCheckBox } from '../styles/EpisodeCard.styles'

export default function CheckBox() {
  return (
    <CheckboxContainer>
    <HiddenCheckbox />
    <StyledCheckbox />
    <Text> Instagram </Text>
 </CheckboxContainer>
  )
}
