import styled, { keyframes, css } from 'styled-components';

export default function IntroSection({ focus }) {
  return (
    <IntroSectionStyle focus={focus}>
      <div>
        <h1>안녕하세요!</h1>
        <p>제 누추한 포트폴리오에 오신 걸 환영합니다!</p>
        <p>아직 차린 건 없지만 재밌게 봐주세요!</p>
      </div>
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

const FadeOut = keyframes`
  0% {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

const IntroSectionStyle = styled.section`
  height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: row;

  animation: ${FadeIn} 1s;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    margin-bottom: 10rem;
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ${({ focus }) =>
    !focus &&
    css`
      animation: ${FadeOut} 0.5s forwards;
    `}
`;
