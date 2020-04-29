import React from 'react';
import getColor from '../../lib/getColor';
import formatTime from '../../lib/formatTime';
import { ParticipantCard, InfoHolder, Name, Icon, Time } from '../Common/Styles';

type ParticipantProps = {
  userName: string,
  index: number,
  duration: number,
  isActive: boolean;
  isInCall: boolean;
}

const Participant = ({isInCall, isActive, userName, index, duration} : ParticipantProps) => {

  return (
    <div>
      {isInCall && <ParticipantCard list active={isActive} isFirst={index === 0}>
        <Icon style={{backgroundColor: getColor(index + 1)}}>{userName ? userName[0] : index + 1}</Icon>
        <InfoHolder list>
          <Name active={isActive}>{userName ? userName : `Participant ${index + 1}`}</Name>
          {duration && <Time list active={isActive}>Time in Call: {formatTime(duration)}</Time>}
        </InfoHolder>
      </ParticipantCard>}
    </div>
  )
};

export default Participant;