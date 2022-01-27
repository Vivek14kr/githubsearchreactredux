import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import {
//   loginRequest,
//   loginInvalid,
//   loginSuccess,
//   loginFailure,
// } from "../Redux/Login/action";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

    const navigate = useNavigate()


    const [form, setForm] = useState({});
      const handleChange = (e) => {
        let { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
      };
          const UserLogin = (e) => {
            e.preventDefault();
           
            fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
              method: "POST",
              body: JSON.stringify(form),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((res) => {
               
             
                  navigate("/")
                }
              )
              .catch((err) => {
                navigate("/registration")
              });
          };
  return (
    <div className="login_box">
      <form method="POST" className="form">
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => UserLogin(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
