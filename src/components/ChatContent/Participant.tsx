import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getColor from '../../lib/getColor';

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
  index: number
}

const Participant = ({participant, index} : ParticipantProps) => {
  const [ duration, setDuration ] = useState({
    timeJoined: Date.now(),
    time: 0
  });
  const [ participantNumber, setParticipantNumber ] = useState(0);

  useEffect(() => {
    setParticipantNumber(index + 1);

    setInterval(() => {
      setDuration(prevState => {
        return({
          ...prevState,
          time: Date.now() - duration.timeJoined
        })
      })
    }, 10);
  }, []);

  const formatTime = (time) => {
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return `${hours} : ${minutes} : ${seconds}`;
  }

  return (
    <ParticipantCard>
      <Icon style={{backgroundColor: getColor(participantNumber)}}>{participant.user_name ? participant.user_name[0] : participantNumber}</Icon>
      <div>
        <Name>{participant.user_name ? participant.user_name : `Participant ${participantNumber}`}</Name>
        <Time>{formatTime(duration.time)}</Time>
      </div>
    </ParticipantCard>
  )
};

export default Participant;