import { useEffect } from 'react';
import styled from 'styled-components';

import useTimer from '../hooks/useTimer';

import Intro from '../components/Main/Intro';

export default function Main() {
  const { startTimer, timeIsOver } = useTimer(2000);

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <MainPage>
      {timeIsOver ? (
        <>
          <Section></Section>
          <Section>소개</Section>
          <Section>프로젝트</Section>
          <Section>마지막</Section>
        </>
      ) : (
        <Intro />
      )}
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;
