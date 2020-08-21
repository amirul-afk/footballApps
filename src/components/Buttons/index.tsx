import React from 'react'
import { ButtonContainer, Label } from './style'

interface PrimaryButtonProps {
  onpress?: any,
  label?: string,
}

export const PrimaryButton = ({
  onpress = undefined,
  label = "empty"
}:PrimaryButtonProps) => {
  return (
    <ButtonContainer
      onPress={onpress}
    >
      <Label>{label}</Label>
    </ButtonContainer>
  )
}