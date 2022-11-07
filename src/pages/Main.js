import styled from 'styled-components';

export default function Main() {
  return (
    <>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </>
  );
}

const Section = styled.div`
  height: 100vh;
`;
