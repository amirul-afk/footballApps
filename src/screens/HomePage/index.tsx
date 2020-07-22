import React, {useState, useEffect} from 'react'
import { MainContainer } from './style'
import { ScrollView } from 'react-native'
import { PrimaryButton } from '../../components'

export default() => {

  const isPressed = () => {
    console.warn('clicked')
  }

  return(
    <ScrollView>

      <MainContainer>
        <PrimaryButton 
          label="Click here"
          onpress={isPressed}
        />
      </MainContainer>

    </ScrollView>

  )
}