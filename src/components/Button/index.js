import React from 'react'
import { ButtonContainer } from './style'

const Button = ({label, onClick, bgColor='#ebdfcc'}) => {
  return (
    <ButtonContainer onClick={onClick} bgColor={bgColor}>
      {label}
    </ButtonContainer>
  )
}

export default Button