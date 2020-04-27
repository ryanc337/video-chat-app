import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import DailyIframe from '@daily-co/daily-js';
import formatParticipantsData from '../../lib/formatParticipantsData';

const Container = styled.div`
  width: 60vw;
  height: 600px;
`;

type ChatProps = {
  setView: any,
  setActiveSpeaker: any,
  setParticipants: any,
  setHasLeftMeeting: any;
};

const Chat = ({setView, setParticipants, setHasLeftMeeting, setActiveSpeaker} : ChatProps) => {
  const frameRef = useRef(null);

  useEffect(() => {
      const callFrame = DailyIframe.createFrame(frameRef.current, {
        showLeaveButton: true,
        iframeStyle: {
          width: '60vw',
          height: '600px',
          borderTopRightRadius: '15px',
          borderBottomRightRadius: '15px',
        }
      });
      callFrame.join({ url: process.env.DAILY_URL });
      callFrame.on('joined-meeting', () => {
        const data = callFrame.participants();
        const participantsData = formatParticipantsData(data);
        setParticipants(participantsData);
      })
      .on('participant-joined', () => {
        const data = callFrame.participants();
        const participantsData = formatParticipantsData(data);
        setParticipants(participantsData);
      })
      .on('left-meeting', (evt) => {
        setHasLeftMeeting(true);
        setActiveSpeaker(null);
        callFrame.destroy();
        setView('SUMMARY');
      })
      .on('participant-left', (evt) => {
        const data = callFrame.participants();
        const participantsData = formatParticipantsData(data);
        setParticipants(participantsData);
      })
      .on('active-speaker-change', (evt) => {
        setActiveSpeaker({
          user_id: evt.activeSpeaker.peerId,
          time_start: Date.now()
        });
        console.log(evt);
      })
  }, [setView, setParticipants]);

  return (
    <Container ref={frameRef}>
      
    </Container> 
  );
};

export default Chat;