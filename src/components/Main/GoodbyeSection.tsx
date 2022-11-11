import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export default function GoodbyeSection({ focus }) {
  return (
    <GoodbyeSectionStyle focus={focus}>
      <section>
        <div>부족한 제 포트폴리오 사이트를 봐주셔서 감사합니다.</div>
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
