import { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

import useSlide from '../../hooks/useSlide';

const projects = [
  {
    name: '엘리스 웹 프로젝트',
    description: '웹 프로젝트를 했습니다.',
  },
  {
    name: '엘리스 데이터 프로젝트',
    description: '데이터 프로젝트를 했습니다.',
  },
];

export default function ProjectSection({ focus }) {
  const { count, setCount, startInterval, leftBtnHandler, rightBtnHandler } =
    useSlide();

  useEffect(() => {
    startInterval();
  }, []);

  return (
    <ProjectSectionStyle focus={focus}>
      <section>
        <div>이하늘</div>
      </section>
      <section>
        <div>hi</div>
      </section>
    </ProjectSectionStyle>
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

const ProjectSectionStyle = styled.div`
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
