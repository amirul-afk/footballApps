import React, { useState, useEffect } from "react";
import {
  MainContainer,
  MatchContainer,
  MatchText,
  DetailContainer,
  TeamContainer,
  TeamNameText,
  MainImage,
} from "./style";
import { ScrollView } from "react-native";
import { PrimaryButton, DetailedMatch } from "../../components";
import { matchResult } from "../../DummyData";

export default () => {

  const [ isDisplay, setIsDisplay ] = useState<boolean>(false)
  // const [ matchData, setMatchData ] = useState([])
  const isPressed = () => {
    console.warn("clicked");
  };

  const button = [
    {
      name: 'close',
      onpress: () => setIsDisplay(false)
    }
  ]

  const displayBox = () => {
    setIsDisplay(true)
  }

  return (
    <ScrollView>
      
      <MainContainer>
      <MainImage
        source={require('../../assets/img/setting.png')}
      >
        {
        matchResult.map((each, key) => (
          <MatchContainer key={key} onPress={displayBox}>
            <TeamContainer>
              <TeamNameText align="right">{each.homeTeam.name}</TeamNameText>
            </TeamContainer>
            <DetailContainer>
              <MatchText>{each.score.fullTime.homeTeam}</MatchText>
            </DetailContainer>
            <DetailContainer>
              <MatchText>-</MatchText>
            </DetailContainer>
            <DetailContainer>
              <MatchText>{each.score.fullTime.awayTeam}</MatchText>
            </DetailContainer>
            <TeamContainer>
              <TeamNameText>{each.awayTeam.name}</TeamNameText>
            </TeamContainer>
          </MatchContainer>
        ))}
        <PrimaryButton label="Click here" onpress={isPressed} />
        {
          isDisplay &&
            <DetailedMatch 
              button={button}
            />
        }
       

      </MainImage>
        
      </MainContainer>
    </ScrollView>
  );
};
