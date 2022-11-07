import styled from 'styled-components';

export default function Main() {
  return (
    <>
      <Section>환영합니다!</Section>
      <Section>소개</Section>
      <Section>프로젝트</Section>
      <Section>마지막</Section>
    </>
  );
}

const Section = styled.div`
  height: 100vh;
`;
