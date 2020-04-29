import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatData from './ChatData';
import formatTime from '../lib/formatTime';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f7fa;
  height: 400px;
  width: 50vw;
  overflow: scroll;
  border: 1px solid black;
  border-radius: 15px;
  -webkit-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);

  ${({ showChatData }) => !showChatData && `
    justify-content: center;
    align-items: center;
  `}
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 500;
  margin: 10px 0;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
`;

const Time = styled.div`
  text-align: center;
`

const Button = styled.button`
  width: 120px;
  margin: 10px 0;
  text-align: center;
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: #4287f5;
  font-size: 16px;
  font-weight: 400;
  color: #f2f7fa;
`;

type SummaryProps = {
  participants: any,
  resetState: any
}

const Summary = ({participants, resetState} : SummaryProps) => {
  const [ showChatData, setShowChatData ] = useState(false);

  return(
    <Wrapper showChatData={showChatData}>
      {!showChatData && <div>
        <Header>Your call has ended</Header>
        <Time>{`You were in the call for ${formatTime(participants.filter(part => part.local)[0].duration)}`}</Time>
        <ButtonHolder>
          <Button onClick={resetState}>Return Home</Button>
          <Button onClick={() => setShowChatData(true)}>View Call Data</Button>
        </ButtonHolder>
      </div>}
      {showChatData && <ChatData participants={participants}/>}
    </Wrapper>
  )
};

export default Summary;