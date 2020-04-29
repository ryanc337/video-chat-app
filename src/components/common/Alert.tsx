import React from 'react';
import styled from 'styled-components';
import {Header, SubTitle, Button} from './Styles';

const AlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f7fa;
  height: 200px;
  width: 40vw;
  border: 1px solid black;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
  box-shadow: 10px 13px 17px -4px rgba(0,0,0,0.75);
`;

type AlertProps = {
  resetState: any
}

const Alert = ({resetState}: AlertProps) => {
  return(
    <AlertWrapper>
      <Header>
        Oops... Something Went Wrong
      </Header>
      <SubTitle>Please Try Again</SubTitle>
      <Button onClick={resetState}>Return Home</Button>
    </AlertWrapper>
  )
}

export default Alert;