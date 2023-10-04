import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate();
  const [showpassAlert, setShowpassAlert] = useState(false);
  const [showmobalert, setshowmobalert] = useState(false);
  const [credentials1, setcredentials1] = useState({

    firstname: "",
    lastname: "",
    gender: "",
    mob: "",
    DOB: "",
    email: "",
    password: "",
    cpassword:"",
  });


  const Signuphandler = async (e) => {
    e.preventDefault();
    const isPasswordMatch = credentials1.password === credentials1.cpassword;
    const isMobileValid = credentials1.mob.length === 10;
    const birthDate = new Date(credentials1.DOB);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    console.log(age);

    
      if (isPasswordMatch && isMobileValid){
        // const response = await fetch('http://localhost:5000/api/auth/createuser', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     firstname: credentials1.firstname,
        //     lastname: credentials1.lastname,
        //     gender: credentials1.gender,
        //     mob: credentials1.mob,
        //     DOB: credentials1.DOB,
        //     email: credentials1.email,
        //     password: credentials1.password
        //   }),
        // });
        // const json = await response.json();
        // console.log(json);
        // if (json.success===true) {
        //   // Redirect to the home page
        //   navigate('/login');
        // }
      }
      else{
        if (!isPasswordMatch) {
          setShowpassAlert(true);
        }
        if (!isMobileValid) {
          setshowmobalert(true);
        }
      }
      
  };

  const onChange1 = (e) => {
    setcredentials1({ ...credentials1, [e.target.name]: e.target.value });
  };
 
  

  return (
    <>
      {showpassAlert && ( // Render the alert when showAlert is true
        <div className='alert alert-warning' role='alert'>
          Password Doesnt Match
        </div>
      )}
      {showmobalert && ( // Render the alert when showAlert is true
        <div className='alert alert-warning' role='alert'>
          Please Enter an Correct Contact Number 
        </div>
      )}

      <div className='container my-5'>
        <div className='d-flex justify-content-center'>
          <form onSubmit={Signuphandler} className='rounded p-4' style={{ backgroundColor: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
            
          <h3 className='my-4'>Sign Up</h3>
  
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
            <input type="password" name="cpassword" onChange={onChange1} id="confirmPassword" className="form-control" />
          </div>

          <button type="submit" onClick={Signuphandler} className="btn btn-primary">Sign Up</button>
          <Link to="/Login" type="submit" className="btn btn-primary mx-3">Back</Link>

        </form>
      </div>
      </div>
    </>

  );
}

export default Signin;
