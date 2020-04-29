import React from 'react';
import formatTime from '../lib/formatTime';
import styled from 'styled-components';
import getColor from '../lib/getColor';
import { ParticipantCard, Name, InfoHolder, Time, Icon } from './Common/Styles';

type ChatDataProps = {
  participants: any,
}

const Divider = styled.p`
  color: black;
  margin: 0 4px;
  font-size: 12px;
`;

const ChatData = ({participants} : ChatDataProps) => {

  return (
  <div style={{overflowY: 'scroll'}}>{participants.map((part) => {
    return(
      <ParticipantCard>
        <Icon style={{backgroundColor: getColor(part.participant_number)}}>{part.user_name ? part.user_name[0] : part.participant_number}</Icon>
        <Name chatData>{`${part.user_name ? 'Name: ' + part.user_name : 'Participant ' + part.participant_number + ':'}`}</Name>
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