import React from 'react';
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
  view: string,
  hasLeftMeeting: boolean;
  setHasLeftMeeting: boolean;
  activeSpeaker: any,
  setActiveSpeaker: any,
  isLoading: boolean;
  setIsLoading: boolean;
};

const ChatContent = ({ participants, setParticipants, setView, view, hasLeftMeeting, setHasLeftMeeting, setActiveSpeaker, activeSpeaker, isLoading, setIsLoading }: ChatContentProps) => {

  return(
    <ChatWrapper loading={isLoading}>
      <Chat setView={setView} setParticipants={setParticipants} setHasLeftMeeting={setHasLeftMeeting} setActiveSpeaker={setActiveSpeaker} setIsLoading={setIsLoading} participants={participants}/>
      <ParticipantList participants={participants} setParticipants={setParticipants} view={view} hasLeftMeeting={hasLeftMeeting} activeSpeaker={activeSpeaker} />
    </ChatWrapper>
  );
};

export default ChatContent;