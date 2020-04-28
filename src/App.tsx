import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Landing from './components/Landing';
import ChatContent from './components/ChatContent/ChatContent';
import Loading from './components/common/Loading';
import Summary from './components/Summary';
import './App.css';

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [ view, setView ] = useState('LANDING');
  const [ participants, setParticipants ] = useState(null);
  const [ hasLeftMeeting, setHasLeftMeeting ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ activeSpeaker, setActiveSpeaker ] = useState(null);

  const resetState = () => {
    setView('LANDING');
    setParticipants(null);
    setHasLeftMeeting(false);
    setIsLoading(false);
    setActiveSpeaker(null);
  }

  return (
    <AppWrapper>
      {view === 'LANDING' && <Landing setView={setView} setIsLoading={setIsLoading} />}
      {view === 'CHAT' && <ChatContent 
        setView={setView} 
        setParticipants={setParticipants}
        participants={participants}
        hasLeftMeeting={hasLeftMeeting}
        setHasLeftMeeting={setHasLeftMeeting}
        setActiveSpeaker={setActiveSpeaker}
        activeSpeaker={activeSpeaker}
        view={view}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />}
      {view === 'SUMMARY' && <Summary participants={participants} resetState={resetState}/>}
      {isLoading && <Loading />}
    </AppWrapper>
  );
}

export default App;
