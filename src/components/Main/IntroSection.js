import styled, { keyframes } from 'styled-components';

export default function IntroSection() {
  return (
    <IntroSectionStyle>
      <section>
        <div>안녕</div>
      </section>
      <section>
        <div>hi</div>
      </section>
    </IntroSectionStyle>
  );
}

const FadeIn = keyframes`
  0% {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const IntroSectionStyle = styled.div`
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
`;
