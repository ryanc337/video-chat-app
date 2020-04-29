import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import ParticipantList from './ParticipantList';

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-radius: 15px;
  -webkit-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);

  ${({ loading }) => loading && `
  visibility: hidden;
  `}
`;

type ChatContentProps = {
  setView: any,
  setParticipants: any,
  participants: any,
  isLoading: boolean;
  setIsLoading: any;
};

const ChatContent = ({ participants, setParticipants, setView, isLoading, setIsLoading }: ChatContentProps) => {
const [startTimer, setStartTimer] = useState(false);

  return(
    <ChatWrapper loading={isLoading}>
      <Chat setView={setView} setStartTimer={setStartTimer} setParticipants={setParticipants} setIsLoading={setIsLoading}/>
      <ParticipantList participants={participants} startTimer={startTimer} setParticipants={setParticipants} />
    </ChatWrapper>
  );
};

export default ChatContent;