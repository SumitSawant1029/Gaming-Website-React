import React , { useState } from 'react';
import { Link ,useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
  const { state } = location;
  const [isAlertVisible] = useState(state?.showSuccess || false);

  return ( 

    <>
    {isAlertVisible && (
        <div className='alert alert-success my-0' role='alert'>
          Sign up completed successfully!
        </div>
      )}

      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" >Gaming Galaxy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/ShopByCategory" className="nav-link text-white" >ShopByCategory</Link>
              </li>

            </ul>
            { !isAlertVisible &&(
              <form className="d-flex" role="search">
                <Link to="/Login">
                  <button className="btn btn-outline-success" type="submit">Log In</button>
                </Link>
              </form>
            ) }
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
