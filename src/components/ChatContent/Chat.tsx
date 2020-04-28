import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import DailyIframe from '@daily-co/daily-js';
import formatParticipantsData from '../../lib/formatParticipantsData';
import Participant from './Participant';

const Container = styled.div`
  width: 60vw;
  height: 600px;
`;

type ChatProps = {
  setView: any,
  setActiveSpeaker: any,
  setParticipants: any,
  setHasLeftMeeting: any,
  setIsLoading: any,
  participants: [] | null;
};

const Chat = ({setView, setParticipants, setHasLeftMeeting, setActiveSpeaker, setIsLoading, participants} : ChatProps) => {
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
      callFrame.join({ url: 'https://introwise.daily.co/ryan' });
      callFrame.on('joined-meeting', () => {
        setView('CHAT');
        const data = callFrame.participants();
        const participantsData = formatParticipantsData(data);
        setParticipants(participantsData);
        setIsLoading(false);
      })
      .on('participant-joined', (evt) => {
        console.log(evt);
        const data = callFrame.participants();
          setParticipants((prevState) => {
            evt.participant.is_in_call = true;
            if (prevState) {
              console.log(evt.participant);
              return prevState.concat([evt.participant]);
            } else {
              const participantsData = formatParticipantsData(data);
              return participantsData;
            }
          });
      })
      .on('left-meeting', (evt) => {
        setHasLeftMeeting(true);
        setActiveSpeaker(null);
        callFrame.destroy();
        setView('SUMMARY');
      })
      .on('participant-left', (evt) => {
        setParticipants((prevState) => {
          return prevState.map((part) => {
            if (part.user_id === evt.participant.user_id) {
              part.is_in_call = false;
              return part;
            } else {
              return part;
            }
          })
        });
        console.log(evt.participant.user_id);
      })
      .on('active-speaker-change', (evt) => {
        setActiveSpeaker({
          user_id: evt.activeSpeaker.peerId,
          time_start: Date.now()
        });
        console.log(evt);
      })
      .on('participant-updated', (evt) => {
        console.log(evt);
      })
  }, [setView, setParticipants]);

  return (
    <Container ref={frameRef}>
      
    </Container> 
  );
};

export default Chat;