import React, { useState } from 'react';

function Signin() {
  const [credentials1, setcredentials1] = useState({

    firstname: "",
    lastname: "",
    gender: "",
    mob: "",
    DOB: "",
    email: "",
    password: "",
  });

  const Signuphandler = async (e) => {
    e.preventDefault();
    console.log(credentials1);
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: credentials1.firstname,
        lastname: credentials1.lastname,
        gender: credentials1.gender,
        mob: credentials1.mob,
        DOB: credentials1.DOB,
        email: credentials1.email,
        password: credentials1.password
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  const onChange1 = (e) => {
    setcredentials1({ ...credentials1, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='container'>
        <h3 className='my-4'>Sign Up</h3>
        <form action="">
          <div className="input-group my-3">
            <span className="input-group-text">First and last name</span>
            <input name="firstname" type="text" onChange={onChange1} aria-label="First name" className="form-control" />
            <input name="lastname" type="text" onChange={onChange1} aria-label="Last name" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select id="gender" name="gender" onChange={onChange1} className="form-select">
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="tel" name="mob" onChange={onChange1} id="phoneNumber" className="form-control" placeholder="Enter your phone number" />
          </div>


          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
            <input type="date" name="DOB" onChange={onChange1} id="dateOfBirth" className="form-control" />
          </div>

          <div className="input-group flex-nowrap my-3">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" onChange={onChange1} name="email" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword5" className="form-label">Password</label>
            <input type="password" name="password" onChange={onChange1} id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" onChange={onChange1} id="confirmPassword" className="form-control" />
          </div>

          <button type="submit" onClick={Signuphandler} className="btn btn-primary">Sign Up</button>

        </form>
      </div>
    </>

  );
}

export default Signin;
