import React , { useState } from 'react';
import { Link ,useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
  const { state } = location;
  const [isAlertVisible] = useState(state?.showSuccess || false);

  return ( 

    <>

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
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Offers
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" >Action</Link></li>
                  <li><Link className="dropdown-item" >Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" >Something else here</Link></li>
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
