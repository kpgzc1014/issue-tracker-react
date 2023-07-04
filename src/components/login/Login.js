import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'
import { useGlobalContext } from '../../context'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {adminUsers,onLogin} = useGlobalContext()
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line array-callback-return
    adminUsers.map((adminUser) => {
      if(email === adminUser.email && password === adminUser.password){
        const name = adminUser.username;
        const role = adminUser.role;
        onLogin({name,email,password,role});
        navigate("/");
      }
    })
  }

  return (
    <div className="login-content">
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login