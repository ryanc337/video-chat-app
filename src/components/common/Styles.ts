import styled from 'styled-components';

export const Header = styled.h1`
  text-align: center;
  font-weight: 500;
  margin: 10px 0;
`;

export const SubTitle = styled.h3`
margin: 10px 0;
text-align: center;
font-weight: 400;
`;

export const Button = styled.button`
  width: 100px;
  margin: 10px 0;
  text-align: center;
  height: 40px;
  border-radius: 15px;
  border: 1px solid black;
  background-color: #4287f5;
  font-size: 16px;
  font-weight: 400;
  color: #f2f7fa;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ParticipantCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f7fa;
  height: ${props => props.list ? '50px' : '80px'}
  align-items: center;

  ${({ active }) => active && `
  background-color: #6355e6;
  `}

  ${({ isFirst }) => isFirst && `
  border-top-left-radius: 15px;
  `}
`;

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: ${props => props.list ? 'column' : 'row'};
  margin: ${props => props.list ? '8px' : '10px 10px 0px 10px'};
`;

export const Name = styled.div`
  font-size: 16px;
  color: #6355e6;
  margin-top: ${props => props.chatData ? '8px' : '0'};

  ${({ active }) => active && `
  color: #f2f7fa;
  `}
`;

export const Time = styled.div`
  font-size: 12px;
  color: ${props => props.list ? '#7d8c9e' : 'black'};

  ${({ active }) => active && `
  color: #f2f7fa;
  `}
`;

export const Icon = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;
