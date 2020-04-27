import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getColor from '../../lib/getColor';
import formatTime from '../../lib/formatTime';

const ParticipantCard = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  font-size: 16px;
`

const Time = styled.div`
  font-size: 12px;
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
  hasLeftMeeting: boolean;
}

const Participant = ({participant, index, setParticipants, view, hasLeftMeeting} : ParticipantProps) => {
  const [ participantNumber, setParticipantNumber ] = useState(0);
  const [timerId, setTimerId] = useState({
    timer: '',
  });

  useEffect(() => {
    if (!hasLeftMeeting) {
      setParticipantNumber(index + 1);
      const timeJoined = Date.now();
      let timer = setInterval(() => {
        setParticipants(prevState => {
          const newParts = prevState.map((part) => {
            if (part.user_id === participant.user_id) {
              part.duration = Date.now() - timeJoined;
            }
              return part;
            })
            return newParts;
          })
      }, 10);
      setTimerId({ timer: timer })
    } else {
      clearInterval(timerId.timer);
    }
  }, [hasLeftMeeting]);

  return (
    <ParticipantCard>
      <Icon style={{backgroundColor: getColor(participantNumber)}}>{participant.user_name ? participant.user_name[0] : participantNumber}</Icon>
      <div>
        <Name>{participant.user_name ? participant.user_name : `Participant ${participantNumber}`}</Name>
        {participant.duration && <Time>{formatTime(participant.duration)}</Time>}
      </div>
    </ParticipantCard>
  )
};

export default Participant;