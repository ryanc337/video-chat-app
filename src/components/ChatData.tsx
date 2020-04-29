import React from 'react';
import formatTime from '../lib/formatTime';
import styled from 'styled-components';
import getColor from '../lib/getColor';
import Participant from './ChatContent/Participant';

type ChatDataProps = {
  participants: any,
}

const ParticipantCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f7fa;
  height: 100px;
  align-items: center;
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
  flex-direction: row;
  margin: 8px;
`

const Time = styled.div`
  font-size: 12px;
  color: black;
`
const Divider = styled.p`
  color: black;
  margin: 0 4px;
  font-size: 12px;
`;
const Icon = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`

const ChatData = ({participants} : ChatDataProps) => {

  return (
  <div>{participants.map((part) => {
    return(
      <ParticipantCard>
        <Icon style={{backgroundColor: getColor(part.participant_number)}}>{part.user_name ? part.user_name[0] : part.participant_number}</Icon>
        <Name>{`${part.user_name ? 'Name: ' + part.user_name : 'Participant ' + part.participant_number + ':'}`}</Name>
        <InfoHolder>
          <Time>Time in Call: {formatTime(part.duration)}</Time>
          <Divider>|</Divider>
          <Time>Time on Video: {formatTime(part.video_duration ? part.video_duration : 0)}</Time>
          <Divider>|</Divider>
          <Time>Time Speaking: {formatTime(part.active_duration ? part.active_duration : 0)}</Time>
        </InfoHolder>
      </ParticipantCard>
      )

  })}</div>
  )
};

export default ChatData;