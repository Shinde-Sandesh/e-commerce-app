import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Navigation } from '../../../components/Navbar/Navigation';
import './login.css'

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
    <>
    {/* <Navigation /> */}
    <div className="auth-container flex-center">
      <div className="auth-main-container flex-center">
        <form className="auth-main" onSubmit={onSubmitHandler}>
        <div className="auth-title">
          <h2 className='text-center'>Sign In</h2>
        </div>
          <div className='auth-email'>
            <label htmlFor="mail">Email address</label>
            <input
              placeholder='Enter E-mail Address'
              className='text-input auth-input'
              type='email'
              required={true}
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
            />
          </div>
          <div className='auth-pwd'>
            <label htmlFor="pwd">Password</label>
            <input
              placeholder='Enter Password'
              value={loginForm.password}
              required={true}
              className='text-input'
              type='password'
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />
          </div>

          <div className='auth-primary-btn text-center'>
            <button type='submit' className='link-btn'>Login</button>
            <button onClick={() => setLoginForm({
                email: fixedLoginForm.email,
                password: fixedLoginForm.password,
              })
            }
              type='submit'
              className='link-btn'
              style={{ marginLeft: '10px' }}
            >
              Login As a Guest
            </button>
          </div>
            <div className='auth-footer'>
              <p>
                <span>Don't have an account? </span>
                <Link className='auth-signup' to={'/signup'}>
                  sign up
                </Link>
              </p>
            </div>
        </form>
      </div>
    </div>
    </>
  );
};
export default Login;
