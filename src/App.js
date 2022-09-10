import React from "react";
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Route, Routes, Navigate } from 'react-router-dom';

import { createAppStore } from './redux/stores/AppStore';
import { Header } from './components/layout/header/Header';
import { Footer } from './components/layout/footer/Footer';
import { Home } from './pages';

export const App = () => (
  <Provider store={createAppStore()}>
    <Header />
    <Container fluid>
      <Routes>        
        <Route path='/home' element={<Home />} exact={true} />
        <Route path="/" element={<Navigate replace to="/home" />} />         
      </Routes>
    </Container>
    <Footer />
  </Provider>
);

export default App;

