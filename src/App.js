import React from "react";
import { Container } from "react-bootstrap";
//import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
//import Footer from './components/Footer';
import PlayGround from "./components/Playground";
//import About from './components/About';

function App() {
  return (
    <Container>
      <Header />
      <PlayGround />
    </Container>
  );
}

export default App;
