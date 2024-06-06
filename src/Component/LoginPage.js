import React from "react";
import './LoginPage.css'
const LoginPage = () => {
  return (
    <form  >
      <div class="d-flex justify-content-xxl-evenly">   
      <div  className="mt-5 ">
      <div className="my-3" >
        <h1 style={{color:"white"}} className="my-4">Login Page</h1>
        <input
          type="email"
          placeholder="Email"
          className="form-control "
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="submit" className="btn btn-primary mx-2">
        register
      </button>
      </div>
      </div>
    </form>
  );
};

export default LoginPage;
