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
  setParticipants: any,
  setIsLoading: any,
  setStartTimer: any
};

const Chat = ({setView, setParticipants, setIsLoading, setStartTimer} : ChatProps) => {
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
      callFrame.join({ url: process.env.REACT_APP_DAILY_URL });
      callFrame.on('participant-updated', (evt) => {
        if (callFrame.meetingState() !== 'joining-meeting') {
          setParticipants(prevState => {
            return prevState.map((part) => {
              if (part.user_id === evt.participant.user_id) {
                part.video = evt.participant.video;
                return part;
              } else {
                return part;
              }
            })
          })
        }
      })
      .on('joined-meeting', () => {
        setView('CHAT');
        const data = callFrame.participants();
        const participantsData = formatParticipantsData(data);
        participantsData[0].active = true;
        setParticipants(participantsData);
        setStartTimer(true);
        setIsLoading(false);
      })
      .on('participant-joined', (evt) => {
          setParticipants((prevState) => {
            evt.participant.is_in_call = true;
            evt.participant.initial = Date.now();
            return prevState.concat([evt.participant]);
          });
      })
      .on('left-meeting', () => {
        setParticipants((prevState) => {
          return prevState.map((part) => {
            part.is_in_call = false;
            return part;
          })
        });
        setStartTimer(false);
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
      })
      .on('active-speaker-change', (evt) => {
        setParticipants((prevState) => {
          return prevState.map((part) => {
            if (part.user_id === evt.activeSpeaker.peerId) {
              part.active = true;
            } else {
              part.active = false;
            }
            return part;
          })
        })
      })
      .on('error', () => {
        setView('ERROR');
      })
  }, [setView, setParticipants]);

  return (
    <Container ref={frameRef}>
      
    </Container> 
  );
};

export default Chat;