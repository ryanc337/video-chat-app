import React, { useEffect } from 'react';
import styled from 'styled-components';
import formatTime from '../lib/formatTime';

type SummaryProps = {
  participants: any,
  hasLeftMeeting: boolean;
}

const Summary = ({participants, hasLeftMeeting} : SummaryProps) => {
  return(
    <div>
      {`You Were in the call for ${participants.map(part => part.local ? formatTime(part.duration) : 'nope')}!`}
    </div>
  )
};

export default Summary;