import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import DailyIframe from '@daily-co/daily-js';

const Container = styled.div`
  width: 60vw;
  height: 600px;
`;

type ChatProps = {
  setView: any,
  setParticipants: any
};

const Chat = ({setView, setParticipants} : ChatProps) => {
  const frameRef = useRef(null);

  useEffect(() => {
      const callFrame = DailyIframe.createFrame(frameRef.current, {
        showLeaveButton: true,
        iframeStyle: {
          width: '60vw',
          height: '600px',
          borderRadius: '15px',
        }
      });
      callFrame.join({ url: process.env.DAILY_URL });
      callFrame.on('joined-meeting', () => {
        setParticipants(callFrame.participants());
      })
      callFrame.on('left-meeting', () => {
        callFrame.destroy();
        setView('SUMMARY');
      })
  }, [setView, setParticipants]);

  return (
    <Container ref={frameRef}>
      
    </Container> 
  );
};

export default Chat;