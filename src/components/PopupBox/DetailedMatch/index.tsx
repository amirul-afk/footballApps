import React from 'react'
import { Modal, CloseBtn, LabelText } from './style'
interface DetailProps {
  button?: Array<{name: string, onpress: void}>,
  match?: any,
}

export const DetailedMatch = ({
  button = [], 
  match = [],
}: DetailProps) => {
  return(
    <Modal>
    {
      button && 
      button.map((each,key) =>(
        <CloseBtn onPress={each.onpress}>
          <LabelText>{each.name}</LabelText>
        </CloseBtn>
      ))

    }
    </Modal>
  )
}