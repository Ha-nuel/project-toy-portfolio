import styled, { keyframes, css } from 'styled-components';

export default function ProjectSection({ focus }) {
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
