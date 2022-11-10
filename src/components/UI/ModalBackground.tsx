import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';

export default function ModalBackground() {
  return <ModalStyle></ModalStyle>;
}

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`;
