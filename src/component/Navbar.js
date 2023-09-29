import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link ,useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
  const { state } = location;
  const [isAlertVisible, setIsAlertVisible] = useState(state?.showSuccess || false);

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" >Gaming Galaxy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" >ShopByCategory</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Offers
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" >Action</a></li>
                  <li><a className="dropdown-item" >Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" >Something else here</a></li>
                </ul>
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
      {isAlertVisible && (
        <div className='alert alert-success' role='alert'>
          Sign up completed successfully!
        </div>
      )}
    </>
  );
}

export default Navbar;
