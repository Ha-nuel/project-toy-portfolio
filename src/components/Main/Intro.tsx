import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Intro() {
  return (
    <IntroScreen>
      <p>환영합니다!</p>
    </IntroScreen>
  );
}

const FadeInAndOut = keyframes`
  0% {
    opacity: 0;
  } 50% {
    opacity: 1;
  } 100% {
    opacity: 0;
  }
`;

const IntroScreen = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  animation: ${FadeInAndOut} 2.1s;

  p {
    font-size: 6rem;
    font-weight: bold;
  }
`;
