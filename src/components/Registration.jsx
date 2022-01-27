import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {Regrequest, Regsucess, Regfail} from "../Redux/Register/actions"
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const dispatch = useDispatch()
  const {isLoading, message, isError} = useSelector((state)=> state.regState)
    const [form, setForm] = useState({})
const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name, value} = e.target

        setForm({
            ...form,
            [name]:value
        })
        
    }
   
    const UserRegister = ()=>{
     dispatch(Regrequest())
     fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
         method:"POST",
         body:JSON.stringify(form),
         headers:{
             "Content-Type" : "application/json"
         }
     }).then((res)=>{
         
         res.json()
           dispatch(Regsucess(res.message));
           navigate("/login");
     }).catch((err)=>{
         dispatch(Regfail(err.message))
     })
    }
  return (
      isLoading? <h1>.....Loading</h1>:
    <> 
      <div>
        <h1>Registration </h1>
        <form method="POST" className="form">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="number"
            placeholder="mobile number"
            name="mobile"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button onClick={UserRegister}>Register</button>
        </form>
      </div>
    </> 
  );
};

export default Registration;
