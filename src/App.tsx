import Modal from "react-modal";

import { Routes } from './routes';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
};
