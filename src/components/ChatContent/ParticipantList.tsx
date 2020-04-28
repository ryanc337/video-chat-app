import React from 'react';
import styled from 'styled-components';
import Participant from './Participant';

const ListWrapper = styled.div`
  height: 602px;
  background-color: #ffffff;
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
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
      return ( <Participant key={part.user_id} index={index} participant={part} setParticipants={setParticipants} view={view} hasLeftMeeting={hasLeftMeeting} activeSpeaker={activeSpeaker}/>);
    })}
  </ListWrapper>
  )
};

export default ParticipantList;