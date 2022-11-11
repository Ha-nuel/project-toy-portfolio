import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export default function AboutSection({ focus }) {
  return (
    <AboutSectionStyle focus={focus}>
      <section>
        <div>소개</div>
      </section>
      <section>
        <ul>
          <li>정보통신과 졸업</li>
          <li>엘리스 AI 트랙 수료</li>
          <li>웹 서비스 프로젝트 대상</li>
        </ul>
      </section>
    </AboutSectionStyle>
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

const AboutSectionStyle = styled.div`
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

  section div {
  }

  ${({ focus }) =>
    !focus &&
    css`
      animation: ${FadeOut} 0.5s forwards;
    `}
`;
