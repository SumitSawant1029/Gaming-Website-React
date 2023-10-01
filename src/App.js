
import './App.css';
import Login from './component/Login';
import Signin from './component/Signin';

import Home from './component/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ShopByCategory from './component/ShopByCategory';

function App() {
  return (
    <Router>
      <Container>
        {/* Define your routes */}
        <Routes>
          {/* Add a route for the "/" path */}
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signin />} />
          <Route path="/ShopByCategory" element={<ShopByCategory />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
