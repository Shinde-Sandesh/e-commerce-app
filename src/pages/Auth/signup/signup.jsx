import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Navigation } from '../../../components/Navbar/Navigation';
import './signup.css'

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { token, signupHandler } = useAuth();
  const [signupForm, setSignupForm] = useState({
    name: '',
    password: '',
    email: '',
  });
  const resetFormError = {
    name: '',
    email: '',
    password: '',
    'confirm-password': '',
  };
  const [formError, setFormError] = useState(resetFormError);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let flagErr = false;
    let newFormError = {};
    Object.keys(formError).forEach((key) => {
      newFormError[key] = '';
      if (signupForm[key] === '' && key !== 'confirm-password') {
        newFormError[key] = `${key} shouldn't be empty`;
        flagErr = true;
      }
    });
    if (signupForm.password !== signupForm.confirm_password) {
      flagErr = true;
      newFormError['confirm-password'] =
        "Password and confirm password didn't matched";
    }
    if (flagErr) {
      setFormError(newFormError);
      return;
    }

    signupHandler(signupForm.email, signupForm.password, signupForm.name);
  };
  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || '/', { replace: true });
    }
  }, [token]);
  return (
    <>
      {/* <Navigation /> */}
      <div className='signup-container flex-center'>
        <div className='signup-main-container flex-center'>
          <form className='signup-main'>
            <div className="signup-title">
              <h2 className='text-center'>Sign Up</h2>
            </div>
            <div className={`signup-inputs ${signupForm.nameError && 'error'}`}>
              <div className='signup-email'>
                <label className='label-heading' >Name</label>
                <input
                  placeholder='Name'
                  className='text-input signup-input'
                  type='text'
                  value={signupForm.name}
                  required
                  onChange={(e) => {
                    setSignupForm({ ...signupForm, name: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className='signup-email'>
              <label htmlFor='email'>Email address</label>
              <input
                placeholder='E-mail'
                className='text-input signup-input'
                type='email'
                required
                value={signupForm.email}
                onChange={(e) => {
                  setSignupForm({ ...signupForm, email: e.target.value });
                }}
              />
            </div>
            <div className='signup-pwd'>
              <label className='label-heading' >Password</label>
              <input
                placeholder=''
                className='text-input signup-input'
                type='password'
                value={signupForm.password}
                required
                onChange={(e) => {
                  setSignupForm({ ...signupForm, password: e.target.value });
                }}
              />
            </div>
            <div className='signup-pwd'>
              <label className='label-heading'>Confirm password</label>
              <input
                placeholder=''
                className='text-input signup-input'
                type='password'
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
                    confirm_password: e.target.value,
                  })
                }
                onFocus={() =>
                  setFormError({ ...formError, 'confirm-password': '' })
                }
              />
            </div>

            <div className='signup-primary-btn text-center'>
              <button onClick={onSubmitHandler} className='link-btn'>
                Create New Account
              </button>
            </div>
            <div className='signup-footer'>
              <p>
                <span>Already have an account? </span>
                <Link className='signup-signup' to={'/login'}>
                  sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
