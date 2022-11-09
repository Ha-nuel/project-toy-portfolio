import { useEffect } from 'react';
import styled from 'styled-components';

import useTimer from '../hooks/useTimer';
import useDivideSection from '../hooks/useDivideSection';

import Intro from '../components/Main/Intro';
import Header from '../components/UI/Header';
import SubNavBar from '../components/UI/SubNavBar';
import IntroSection from '../components/Main/IntroSection';
import AboutSection from '../components/Main/AboutSection';
import ProjectSection from '../components/Main/ProjectSection';
import GoodbyeSection from '../components/Main/GoodbyeSection';
import Footer from '../components/UI/Footer';

export default function Main() {
  const { startTimer, timeIsOver } = useTimer(2000);
  const { currentSection, scrollEventHandler } = useDivideSection();

  useEffect(() => {
    startTimer();
    window.addEventListener('scroll', scrollEventHandler);

    return () => window.removeEventListener('scroll', scrollEventHandler);
  }, []);

  return (
    <MainPage>
      {timeIsOver ? (
        <>
          <Header />
          <SubNavBar focus={currentSection !== 1} />
          <IntroSection focus={currentSection === 1} />
          <AboutSection focus={currentSection === 2} />
          <ProjectSection focus={currentSection === 3} />
          <GoodbyeSection focus={currentSection === 4} />
          <Footer />
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
