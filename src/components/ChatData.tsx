import React from 'react';
import formatTime from '../lib/formatTime';
import styled from 'styled-components';

type ChatDataProps = {
  participants: any,
}

const ChatData = ({participants} : ChatDataProps) => {
  console.log(participants);
  return (
  <div>{participants.map((part) => {
    return(
      <div>
        <p>Num: {part.participant_number}</p>
        <p>Time in Call: {formatTime(part.duration)}</p>
        <p>Time on Video: {formatTime(part.video_duration)}</p>
        <p>Time Speaking: {formatTime(part.active_duration)}</p>
      </div>
      )

  })}</div>
  )
};

export default ChatData;