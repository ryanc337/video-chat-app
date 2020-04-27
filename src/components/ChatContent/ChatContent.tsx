import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import ParticipantList from './ParticipantList';

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

type ChatContentProps = {
  setView: any,
  setParticipants: any,
  participants: any,
};

const ChatContent = ({ participants, setParticipants, setView }: ChatContentProps) => {

  return(
    <ChatWrapper>
      <Chat setView={setView} setParticipants={setParticipants} />
      <ParticipantList participants={participants} />
    </ChatWrapper>
  );
};

export default ChatContent;