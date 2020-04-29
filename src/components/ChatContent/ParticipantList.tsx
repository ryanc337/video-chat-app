import React, { useState, useEffect } from 'react';
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
  startTimer: boolean;
}

const ParticipantList = ({participants, setParticipants, startTimer} : ParticipantListProps) => {
  useEffect(() => {
    if (startTimer) {
      let timer = setInterval(() => {
        setParticipants((prevState) => {
            return prevState.map((part , index) => {
              if (part.is_in_call) {
                part.duration = Date.now() - part.initial;
                part.participant_number = index + 1;
                if (part.video) {
                  const videoOffTime = part.video_duration_off ? part.video_duration_off : 0;
                  part.video_duration = Date.now() - part.initial - videoOffTime;
                } else {
                  const videoTime = part.video_duration ? part.video_duration : 0;
                  part.video_duration_off = Date.now() - part.initial - videoTime;
                }
                if (part.active) {
                  const activeOffTime = part.active_duration_off ? part.active_duration_off : 0;
                  part.active_duration = Date.now() - part.initial - activeOffTime;
                } else {
                  const activeTime = part.active_duration ? part.active_duration : 0;
                  part.active_duration_off = Date.now() - part.initial - activeTime;
                }
              }
              return part;
            });
        })
        if (!startTimer) { 
          clearInterval(timer);
        }
      }, 10)
    }
  },[startTimer])

  return(
  <ListWrapper>
    {participants && participants.map((part, index) => {
      return ( <Participant key={part.user_id} isInCall={part.is_in_call} isActive={part.active} userName={part.user_name} duration={part.duration} index={index}/>);
    })}
  </ListWrapper>
  )
};

export default ParticipantList;