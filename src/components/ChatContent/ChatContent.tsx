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
  activeSpeaker: any,
  setActiveSpeaker: any,
};

const ChatContent = ({ participants, setParticipants, setView, view, hasLeftMeeting, setHasLeftMeeting, setActiveSpeaker, activeSpeaker }: ChatContentProps) => {

  return(
    <ChatWrapper>
      <Chat setView={setView} setParticipants={setParticipants} setHasLeftMeeting={setHasLeftMeeting} setActiveSpeaker={setActiveSpeaker} />
      <ParticipantList participants={participants} setParticipants={setParticipants} view={view} hasLeftMeeting={hasLeftMeeting} activeSpeaker={activeSpeaker} />
    </ChatWrapper>
  );
};

export default ChatContent;