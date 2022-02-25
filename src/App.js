import React from "react";
//import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
//import Footer from './components/Footer';
import PlayGround from "./components/Playground";
//import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <PlayGround />
    </div>
  );
}
/*
<div>
      <Header />
      <Routes>
        <Route exact path="/" component={PlayGround}/>
        <Route path="/abou" component={About}/>
      </Routes>
      <Footer />
    </div>
*/

export default App;
