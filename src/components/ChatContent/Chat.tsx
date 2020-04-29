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
  participants: any,
  setStartTimer: any
};

const Chat = ({setView, setParticipants, setHasLeftMeeting, setActiveSpeaker, setIsLoading, participants, setStartTimer} : ChatProps) => {
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
        console.log(evt);
      })
      .on('joined-meeting', (evt) => {
        setView('CHAT');
        console.log(evt);
        const data = callFrame.participants();
        const participantsData = formatParticipantsData(data);
        participantsData[0].active = true;
        setParticipants(participantsData);
        setActiveSpeaker({
          user_id: evt.participants.local.user_id,
          time_start: Date.now()
        });
        setStartTimer(true);
        setIsLoading(false);
        console.log(evt);
      })
      .on('participant-joined', (evt) => {
          setParticipants((prevState) => {
            evt.participant.is_in_call = true;
            evt.participant.initial = Date.now();
            console.log(evt.participant);
            return prevState.concat([evt.participant]);
          });
      })
      .on('left-meeting', (evt) => {
        setParticipants((prevState) => {
          return prevState.map((part) => {
            part.is_in_call = false;
            return part;
          })
        });
        setHasLeftMeeting(true);
        setActiveSpeaker(null);
        setStartTimer(false);
        callFrame.destroy();
        setView('SUMMARY');
        console.log(evt);
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
        console.log(evt);
      })
      .on('active-speaker-change', (evt) => {
        setActiveSpeaker({
          user_id: evt.activeSpeaker.peerId,
          time_start: Date.now()
        });
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
        console.log(evt);
      })
  }, [setView, setParticipants]);

  return (
    <Container ref={frameRef}>
      
    </Container> 
  );
};

export default Chat;