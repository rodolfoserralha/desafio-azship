import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBackBtn } from '../styles/GoBack.styles';

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <GoBackBtn onClick={() => navigate('/episodes')}>Voltar</GoBackBtn>
  )
}
