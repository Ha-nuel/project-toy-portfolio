import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export default function SubNavBar({ focus: boolean, currentSection: number }) {
  return (
    <SubNav focus={focus}>
      <li>
        <button>인사</button>
      </li>
      <li>
        <button>소개</button>
      </li>
      <li>
        <button>프로젝트</button>
      </li>
      <li>
        <button>끝으로</button>
      </li>
    </SubNav>
  );
}

const FadeOut = keyframes`
  0% {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

const FadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(1);
  }
`;

const SubNav = styled.ul`
  z-index: 9;
  visibility: hidden;

  display: flex;
  flex-direction: row;

  position: fixed;
  top: 2rem;
  left: 4rem;

  list-style: none;

  animation: ${FadeOut} 0.5s forwards;

  &:first-child {
    margin-left: 3rem;
  }

  li {
    margin-right: 2rem;
  }

  button {
    border-radius: 20px;
    border: gray 1px solid;
    padding: 0.2rem 1rem;
  }

  ${({ focus }) =>
    focus &&
    css`
      visibility: visible;
      animation: ${FadeInDown} 1s;
    `}
`;
