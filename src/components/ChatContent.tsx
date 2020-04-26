import React from 'react';
import styled from 'styled-components';
import Chat from './Chat';

type ChatContentProps = {
  setView: any
};

const ChatContent = ({ setView }: ChatContentProps) => {

  return(
    <div>
      <Chat setView={setView} />
    </div>
  );
};

export default ChatContent;