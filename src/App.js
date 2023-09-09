import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Signin from './component/Signin';
import Navbar from './component/Navbar';
import React, { useState } from 'react';

function App() {
  const [ui, setUi] = useState('Navbar');

  const switchToSignin = (e) => {
    setUi(e);
  };

  // Define a function to switch between components based on the 'ui' state
  const renderUI = () => {
    if (ui === 'Navbar') {
      return <Navbar switchToSignin={switchToSignin} />;
    }else if (ui === 'Signin'){
      return <Signin switchToSignin={switchToSignin}/>;
    }else if (ui === 'Login'){
      return <Login switchToSignin={switchToSignin}/>;
    }
  };

  return (
    <>
      {renderUI()} {/* Call the function to render the selected component */}
    </>
  );
}

export default App;
