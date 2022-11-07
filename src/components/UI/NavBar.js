import styled from 'styled-components';

export default function NavBar() {
  return (
    <Nav>
      <NavList>
        <ListElement>소개</ListElement>
        <ListElement>마켓</ListElement>
      </NavList>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const ListElement = styled.li`
  cursor: pointer;
  margin-right: 2rem;
  padding: 4px 16px;
`;

const StartButton = styled(ListElement)`
  cursor: pointer;
  padding: 4px 16px;
  font-size: 1.25rem;
  font-family: 'elice-bold';
  color: white;
  background-color: #77bb3f;
  border: #77bb3f 1px solid;
  border-radius: 20px;
  margin-right: 3rem;
`;
