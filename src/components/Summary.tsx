import React, { useEffect } from 'react';
import styled from 'styled-components';
import formatTime from '../lib/formatTime';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #ffffff;
height: 300px;
width: 60vw;
border: 1px solid black;
border-radius: 15px;
align-items: center;
`

type SummaryProps = {
  participants: any,
  hasLeftMeeting: boolean;
}

const Summary = ({participants, hasLeftMeeting} : SummaryProps) => {
  console.log(participants);
  return(
    <Wrapper>
      {`You Were in the call for ${formatTime(participants.filter(part => part.local)[0].duration)}`}
    </Wrapper>
  )
};

export default Summary;