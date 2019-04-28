import React from 'react';
import { GlobalStyles } from '../../constants/globalStyles';
import { Container } from 'react-bootstrap';
import { Header } from '../Header';
import { Main } from './main';


export const App = () => (
  <Container>
    <GlobalStyles />
    <Header title="Glovo" />
    <Main />
  </Container>
)