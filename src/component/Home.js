// MyComponent.jsx
import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling
import Navbar from './Navbar';
function Home() {
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const carousel = () => {
      const x = document.getElementsByClassName("mySlides");
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      setMyIndex((prevIndex) => (prevIndex >= x.length - 1 ? 0 : prevIndex + 1));
      x[myIndex].style.display = "block";
    };

    const intervalId = setInterval(carousel, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [myIndex]);

  return (
    <>
    <Navbar/>
    <div>

      <table border="0" width="100%" bgcolor="white" height="75">
        <tr>
          <th width="12.5%">
            <div className="dropdown">
              <span>Headphones</span>
              <div className="dropdown-content">
                <p>under 500 rs</p><hr />
                <p>under 1000 rs</p><hr />
                <p>under 1500 rs</p><hr />
                <p>under 2500 rs</p><hr />
                <p>under 5000 rs</p>
              </div>
            </div>
          </th>
          {/* ... Repeat this block for other categories */}
        </tr>
      </table>

      <div className="w3-content" style={{ maxWidth: '1350px' }}>
        <img className="mySlides" src="ban.jpg" alt="Banner" style={{ width: '100%' }} height="200" />
      </div>

      <br /><br />

      <table border="0" width="100%" bgcolor="white">
        <tr>
          <td colSpan="5"><h2>Mouse</h2><hr /></td>
        </tr>
        <tr>
          <th>
            <img src="m1.jpg" alt="Mouse 1" width="75%" height="150" />
            <p>Price: <font color="green">549/-</font></p>
          </th>
          {/* ... Repeat this block for other products */}
        </tr>
      </table>

      {/* ... Repeat the table blocks for other product sections */}
    </div>
    </>
  );
}

export default Home;
