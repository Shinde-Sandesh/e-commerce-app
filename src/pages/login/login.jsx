import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Navigation } from '../../components/Navigation'
import './login.css'

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { token, loginUser } = useAuth();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      loginUser(loginForm.email, loginForm.password);
    })();
  }, [loginForm.email, loginForm.password]);

  const loginHandler = () => {
    setLoginForm((form) => ({
      ...form,
      email: "test@gmail.com",
      password: "test123",
    }));
  };

  if (token) {
    // Do whatever you need to do when the user is logged in
    // For example, redirect to a specific page.
    navigate(location?.state?.from || "/product", { replace: true });
  }

  return (
    <>
      <Navigation />
      <div className="center">
        <div className="login-container">
          <div className="login-heading">Login</div>
          <form action="#">
            <div className="data">
              <label className="input-login label-class" htmlFor="">Email Address</label>
              <input type="text" placeholder="Enter Email ID" value={loginForm.email} onChange={(e) => setLoginForm((form) => ({ ...form, email: e.target.value }))} required />
            </div>
            <div className="data">
              <label className="input-login label-class" htmlFor="">Password</label>
              <input type="password" placeholder="Enter your password" value={loginForm.password} onChange={(e) => setLoginForm((form) => ({ ...form, password: e.target.value }))} required />
            </div>
            <div className="remember-me flex">
              <div className="checkmark">
                <input type="checkbox" />
                <span className="span-style">Remember me</span>
              </div>
              <Link href="" className="forget">Forget Password</Link>
            </div>
            <div>
              <button className="btn1 login-button" onClick={() => {
                loginHandler();
              }}>Login</button>
            </div>
            <div className="create-account">
              <Link to="/signup">Create new account <i className="fas fa-angle-right create-icon"></i></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
