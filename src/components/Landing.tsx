import React from 'react';
import styled from 'styled-components';
import { Header, Button, SubTitle } from './Common/Styles';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f7fa;
  height: 200px;
  width: 40vw;
  border: 1px solid black;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
`;

type LandingProps = {
  setView: any,
  setIsLoading: any
}

const Landing = ({ setView, setIsLoading }: LandingProps) => {
  const handleClick = () => {
    setView('CHAT');
    setIsLoading(true);
  }

  return (
    <LandingWrapper>
      <Header>Welcome to Video Chat</Header>
      <SubTitle>Join a party!</SubTitle>
      <Button onClick={handleClick}>Join Call</Button>
    </LandingWrapper>
  )
}

export default Landing;