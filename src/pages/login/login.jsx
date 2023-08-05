import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
// import '../Auth.css';

const Login = () => {
  const { loginHandler, token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const fixedLoginForm = {
    email: 'johndoe@gmail.com',
    password: 'johnDoe123'
  };
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginForm.email, loginForm.password);
  };
  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || '/', { replace: true });
    }
  }, [token]);

  return (
    <div className='login-container'>
      <main className='login-main'>
        <form className='login-card brd-rd-semi-sq' onSubmit={onSubmitHandler}>
          <div className='login-card-header'>
            <h3 className='text-align-center'>Sign In</h3>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Email address</label>
              <input
                placeholder='abc@fashiFy.com'
                className='text-input auth-input'
                type='text'
                required={true}
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className='login-card-item'>
            <div className='input-container'>
              <label>Password</label>
              <input
                placeholder='abcd1234'
                value={loginForm.password}
                required={true}
                className='text-input'
                type='password'
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className='login-card-item'>
            <button
              type='submit'
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
            >
              Login
            </button>
            <button
              onClick={() =>
                setLoginForm({
                  email: fixedLoginForm.email,
                  password: fixedLoginForm.password,
                })
              }
              type='submit'
              className='btn btn-link-primary background-primary text-align-center brd-rd-semi-sq'
            >
              Login As a Guest
            </button>
            <div className='auth-footer'>
              <p>
                <span>Don't have an account?</span>
                <Link className='auth-signup' to={'/signup'}>
                  sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Login;
