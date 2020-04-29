import React, { useState } from 'react';
import styled from 'styled-components';
import ChatData from './ChatData';
import formatTime from '../lib/formatTime';
import { Header, Button } from './common/Styles';

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f7fa;
  height: 400px;
  width: 650px;
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

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
`;

const Time = styled.div`
  text-align: center;
`;

const ChatDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type SummaryProps = {
  participants: any,
  resetState: any
}

const Summary = ({participants, resetState} : SummaryProps) => {
  const [ showChatData, setShowChatData ] = useState(false);

  return(
    <SummaryWrapper showChatData={showChatData}>
      {!showChatData && <div>
        <Header>Your call has ended</Header>
        <Time>{`You were in the call for ${formatTime(participants.filter(part => part.local)[0].duration)}`}</Time>
        <ButtonHolder>
          <Button onClick={resetState}>Return Home</Button>
          <Button onClick={() => setShowChatData(true)}>View Call Data</Button>
        </ButtonHolder>
      </div>}
      {showChatData && <ChatDataContainer>
        <Header>Chat Data</Header>
        <ChatData participants={participants}/>
        <Button onClick={() => (setShowChatData(false))}>Back</Button>
      </ChatDataContainer>}
    </SummaryWrapper>
  )
};

export default Summary;