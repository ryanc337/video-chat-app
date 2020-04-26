import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import ParticipantList from './ParticipantList';

type ChatContentProps = {
  setView: any,
  setParticipants: any,
};

const ChatContent = ({ setParticipants, setView }: ChatContentProps) => {

  return(
    <div>
      <Chat setView={setView} setParticipants={setParticipants} />
      <ParticipantList />
    </div>
  );
};

export default ChatContent;