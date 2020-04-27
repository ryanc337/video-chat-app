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
  view: string,
  hasLeftMeeting: boolean;
  setHasLeftMeeting: boolean;
};

const ChatContent = ({ participants, setParticipants, setView, view, hasLeftMeeting, setHasLeftMeeting }: ChatContentProps) => {

  return(
    <ChatWrapper>
      <Chat setView={setView} setParticipants={setParticipants} setHasLeftMeeting={setHasLeftMeeting}/>
      <ParticipantList participants={participants} setParticipants={setParticipants} view={view} hasLeftMeeting={hasLeftMeeting} />
    </ChatWrapper>
  );
};

export default ChatContent;