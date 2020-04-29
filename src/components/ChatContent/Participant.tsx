import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getColor from '../../lib/getColor';
import formatTime from '../../lib/formatTime';

const ParticipantCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f7fa;
  height: 50px;
  align-items: center;

  ${({ active }) => active && `
  background-color: #6355e6;
  `}

  ${({ isFirst }) => isFirst && `
  border-top-left-radius: 15px;
  `}
`;

const Name = styled.div`
  font-size: 16px;
  color: #6355e6;

  ${({ active }) => active && `
  color: #f2f7fa;
  `}
`;

const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`

const Time = styled.div`
  font-size: 12px;
  color: #7d8c9e;

  ${({ active }) => active && `
  color: #f2f7fa;
  `}
`
const Icon = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`

type ParticipantProps = {
  participant: any,
  index: number,
  setParticipants: any,
  view: string,
  activeSpeaker: any,
  hasLeftMeeting: boolean;
  isInCall: boolean;
}

const Participant = ({participant, index, setParticipants, view, hasLeftMeeting, activeSpeaker, isInCall} : ParticipantProps) => {
  const [ participantNumber, setParticipantNumber ] = useState(index + 1);
  const [time, setTime ] = useState(Date.now());
  const [isActive, setIsActive] = useState(false);
  const [timerId, setTimerId] = useState({
    durationTimer: '',
    activeTimer: ''
  });

  //Track Duration Participant Was in Call
  useEffect(() => {
    if (!hasLeftMeeting && isInCall) {
      let timer = setInterval(() => {
        setParticipants(prevState => {
          const newParts = prevState.map((part) => {
            if (part.user_id === participant.user_id) {
              part.participant_number = participantNumber;
              part.duration = Date.now() - time;
              if (part.video) {
                part.hasOwnProperty('video_duration') ? part.video_duration += 5 : part.video_duration = 5;
              }
            }
              return part;
            })
            return newParts;
          })
      }, 10);
      setTimerId((prevState) => 
      { 
        return( {
          ...prevState, 
          durationTimer: timer
        }) 
      })
    } else {
      console.log('cleared');
      clearInterval(timerId.durationTimer);
    }
  }, [hasLeftMeeting]);

  //Track Active Speaking Time
  useEffect(() => {
    let active;
    if (activeSpeaker && activeSpeaker.user_id === participant.user_id) {
      if (isInCall) {
        let timer = setInterval(() => {
          setParticipants(prevState => {
            const newParts = prevState.map((part) => {
              if (part.user_id === participant.user_id) {
                active = true;
                part.hasOwnProperty('active_duration') ? part.active_duration += 5 : part.active_duration = 5;
              } else {
                active = false;
              }
              return part;
            })
            return newParts;
          })
          setIsActive(active);
        }, 10)
        setTimerId((prevState) => 
        { 
          return( {
            ...prevState, 
            activeTimer: timer
          }) 
        })
        console.log(timerId);
      } else {
        console.log('clearedactive');
        clearInterval(timerId.activeTimer);
      }
    } else {
      console.log('clearedactive');
      clearInterval(timerId.activeTimer);
    }

  }, [activeSpeaker, isInCall])

  return (
    <div>
      {isInCall && <ParticipantCard active={isActive} isFirst={index === 0}>
        <Icon style={{backgroundColor: getColor(participantNumber)}}>{participant.user_name ? participant.user_name[0] : participantNumber}</Icon>
        <InfoHolder>
          <Name active={isActive}>{participant.user_name ? participant.user_name : `Participant ${participantNumber}`}</Name>
          {participant.duration && <Time active={isActive}>Time in Call: {formatTime(participant.duration)}</Time>}
        </InfoHolder>
      </ParticipantCard>}
    </div>
  )
};

export default Participant;