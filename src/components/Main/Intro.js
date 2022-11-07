import styled from 'styled-components';

export default function Intro() {
  return (
    <IntroScreen>
      <p>환영합니다!</p>
    </IntroScreen>
  );
}

const IntroScreen = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    font-size: 6rem;
    font-weight: bold;
  }
`;
