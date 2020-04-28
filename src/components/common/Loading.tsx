import React from 'react';
import styled from 'styled-components';
import Spinner from '../../assets/spinner.svg';

const LoadingWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  z-index: 1;
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

const Loading = () => {
  return(
    <LoadingWrapper>
      <img src={Spinner} alt="Loading..." />
    </LoadingWrapper>
  )
};

export default Loading;