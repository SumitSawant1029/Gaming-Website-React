import React from 'react';
import ReactDOM from 'react-dom';

function Signin() {
  return (
    <>
      <div className='container'>
        <h3 className='my-4'>Sign Up</h3>
        <form action="">
          <div className="input-group my-3">
            <span className="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" className="form-control"/>
            <input type="text" aria-label="Last name" className="form-control"/>
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select id="gender" className="form-select">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" id="phoneNumber" className="form-control" placeholder="Enter your phone number"/>
          </div>


          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
            <input type="date" id="dateOfBirth" className="form-control"/>
          </div>

          <div className="input-group flex-nowrap my-3">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword5" className="form-label">Password</label>
            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" id="confirmPassword" className="form-control"/>
          </div>
          
          <button type="submit"  className="btn btn-primary">Sign Up</button>
          
        </form>
      </div>
    </>
  );
}

export default Signin;
