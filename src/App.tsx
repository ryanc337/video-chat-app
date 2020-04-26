import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Landing from './components/Landing';
import ChatContent from './components/ChatContent/ChatContent';
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
  const [ participants, setParticipants ] = useState({});

  return (
    <AppWrapper>
      {view === 'LANDING' && <Landing setView={setView} />}
      {view === 'CHAT' && <ChatContent 
        setView={setView} 
        setParticipants={setParticipants} 
      />}
      {view === 'SUMMARY' && <Summary />}
    </AppWrapper>
  );
}

export default App;
