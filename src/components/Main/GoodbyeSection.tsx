import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export default function GoodbyeSection({ focus }) {
  return (
    <GoodbyeSectionStyle focus={focus}>
      <section>
        <div>이하늘</div>
      </section>
      <section>
        <div>hi</div>
      </section>
    </GoodbyeSectionStyle>
  );
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

const GoodbyeSectionStyle = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;

  animation: ${FadeIn} 1s;

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
  }

  ${({ focus }) =>
    !focus &&
    css`
      animation: ${FadeOut} 0.5s forwards;
    `}
`;
