import React from 'react'
import styled from 'styled-components/native'

export const MainContainer = styled.View`
  align-items: center;
`

export const MatchContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-content:center;
  padding: 10px 0 10px 0;
  margin-bottom: 2px;
  border-width:1px;
  border-radius:10px;
  border-color: #D3CACA;
`

export const DetailContainer = styled(MainContainer)`
  padding: 0 5px 0 5px;
`

export const TeamContainer = styled.View`
  width:40%;
  padding: 0 5px 0 5px;
`

export const MatchText = styled.Text``

interface TextProps {
  align?: string
}
export const TeamNameText = styled.Text<TextProps>`
  text-align: ${props => props.align ? props.align : 'left' };
`

export const MainImage = styled.ImageBackground`
  opa
`