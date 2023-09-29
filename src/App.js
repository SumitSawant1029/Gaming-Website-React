
import './App.css';
import Login from './component/Login';
import Signin from './component/Signin';
import Navbar from './component/Navbar';
import Home from './component/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Container>
        {/* Define your routes */}
        <Routes>
          {/* Add a route for the "/" path */}
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Signup" element={<Signin />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
