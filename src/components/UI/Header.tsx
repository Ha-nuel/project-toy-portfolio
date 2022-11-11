import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Header() {
  return (
    <HeaderStyle>
      <div></div>
      <nav>
        <ul>
          <li>인사</li>
          <li>소개</li>
          <li>프로젝트</li>
          <li>끝으로</li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const HeaderStyle = styled.div`
  height: 10vh;
  width: 100%;

  display: flex;
  flex-direction: row;

  animation: ${FadeIn} 2s;

  div {
    width: 100%;
    height: 100%;
  }

  nav {
    width: 100%;
    height: 100%;
  }

  ul {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  li {
    list-style: none;
    margin-right: 6rem;
  }
`;
