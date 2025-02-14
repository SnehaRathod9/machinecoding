import React from "react";
import "../App.css";

function LoginForm() {
  return (
    <div className="outerdiv">
      <div className="container">
        <h1>Login Form</h1>
        <div className="fields">
          <label>Username</label>
          <input type="text" placeholder="UserName"></input>
        </div>
        <div className="fields">
          <label>Email</label>
          <input type="text" placeholder="Email"></input>
        </div>
        <div className="fields">
          <label>Password</label>
          <input type="text" placeholder="Password"></input>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
