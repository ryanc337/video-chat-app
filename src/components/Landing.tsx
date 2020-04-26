import React from 'react';
import styled from 'styled-components';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 300px;
  width: 60vw;
  border: 1px solid black;
  border-radius: 15px;
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
`

const SubTitle = styled.h3`
  text-align: center;
`

const Button = styled.button`
  width: 80px;
  height: 40px;
`

type LandingProps = {
  setView: any
}

const Landing = ({ setView }: LandingProps) => {
  return (
    <LandingWrapper>
      <Header>Welcome</Header>
      <SubTitle>Join a Room!</SubTitle>
      <Button onClick={() => setView('CHAT')}>Join Call</Button>
    </LandingWrapper>
  )
}

export default Landing;