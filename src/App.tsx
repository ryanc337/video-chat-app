import React, { useState } from 'react';
import styled from 'styled-components';
import Landing from './components/Landing';
import ChatContent from './components/ChatContent/ChatContent';
import Loading from './components/Common/Loading';
import Summary from './components/Summary';
import Alert from './components/Common/Alert';
import './App.css';

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [ view, setView ] = useState('LANDING');
  const [ participants, setParticipants ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const resetState = () => {
    setView('LANDING');
    setParticipants([]);
    setIsLoading(false);
  }

  return (
    <AppWrapper>
      {view === 'LANDING' && <Landing setView={setView} setIsLoading={setIsLoading} />}
      {view === 'CHAT' && <ChatContent 
        setView={setView} 
        setParticipants={setParticipants}
        participants={participants}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />}
      {view === 'SUMMARY' && <Summary participants={participants} resetState={resetState}/>}
      {view === 'ERROR' && <Alert resetState={resetState} />}
      {isLoading && <Loading />}
    </AppWrapper>
  );
}

export default App;
