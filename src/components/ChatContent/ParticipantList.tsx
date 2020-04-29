import React, { useState } from 'react';
import styled from 'styled-components';
import Participant from './Participant';

const ListWrapper = styled.div`
  height: 604px;
  background-color: #ffffff;
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;
`

type ParticipantListProps = {
  participants: any,
  setParticipants: any,
  view: string,
  activeSpeaker: any,
  hasLeftMeeting: boolean;
}

const ParticipantList = ({participants, setParticipants, view, hasLeftMeeting, activeSpeaker } : ParticipantListProps) => {

  return(
  <ListWrapper>
    {participants && participants.map((part, index) => {
      return ( <Participant key={part.user_id} isInCall={part.is_in_call} index={index} participant={part} setParticipants={setParticipants} view={view} hasLeftMeeting={hasLeftMeeting} activeSpeaker={activeSpeaker}/>);
    })}
  </ListWrapper>
  )
};

export default ParticipantList;