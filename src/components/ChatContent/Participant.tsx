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
  userName: string,
  index: number,
  duration: number,
  isActive: boolean;
  isInCall: boolean;
}

const Participant = ({isInCall, isActive, userName, index, duration} : ParticipantProps) => {


  return (
    <div>
      {isInCall && <ParticipantCard active={isActive} isFirst={index === 0}>
        <Icon style={{backgroundColor: getColor(index)}}>{userName ? userName[0] : index + 1}</Icon>
        <InfoHolder>
          <Name active={isActive}>{userName ? userName : `Participant ${index + 1}`}</Name>
          {duration && <Time active={isActive}>Time in Call: {formatTime(duration)}</Time>}
        </InfoHolder>
      </ParticipantCard>}
    </div>
  )
};

export default Participant;