import React, { useState } from 'react';
import styled from 'styled-components';
import Landing from './components/Landing';
import ChatContent from './components/ChatContent';
import './App.css';

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [ view, setView ] = useState('LANDING');
  return (
    <AppWrapper>
      {view === 'LANDING' && <Landing setView={setView} />}
      {view === 'CHAT' && <ChatContent setView={setView} />}
    </AppWrapper>
  );
}

export default App;
