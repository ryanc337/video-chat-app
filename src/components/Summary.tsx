import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatData from './ChatData';
import formatTime from '../lib/formatTime';

const Wrapper = styled.div`
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

const Button = styled.button`
  width: 120px;
  margin: 10px 0;
  text-align: center;
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: #d6d6d6;
  font-size: 16px;
  font-weight: 400;
`;

type SummaryProps = {
  participants: any,
  resetState: any
}

const Summary = ({participants, resetState} : SummaryProps) => {
  const [ showChatData, setShowChatData ] = useState(false);

  return(
    <Wrapper>
      {!showChatData && <div>
        <Header>Your call has ended</Header>
        {`You were in the call for ${formatTime(participants.filter(part => part.local)[0].duration)}`}
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