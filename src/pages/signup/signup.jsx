import './signup.css';
import { Navigation } from '../../components/Navigation'
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <Navigation />
      <div className="center">
        <div className="signup-container">
          <div className="login-heading">Sign Up</div>
          <form action="#">
            <div className="data">
              <label className="label-class" for="name">Name</label>
              <input type="text" placeholder="Enter Name" required />
            </div>
            <div className="data">
              <label className="label-class" for="address">Address</label>
              <input type="text" placeholder="Enter Address" required />
            </div>
            <div className="data">
              <label className="label-class" for="email">Email Address</label>
              <input type="email" placeholder="Enter Email ID" required />
            </div>
            <div className="data">
              <label className="label-class" for="password">Password</label>
              <input type="password" placeholder="Enter password" required />
            </div>
            <div>
              <input type="checkbox" />
              <span>Accept <Link to=''>terms and conditions</Link></span>
            </div>
            <div>
              <button className="btn1 login-button" type="submit">Create New Account</button>
            </div>
            <div className="create-account">
              <Link to='/login'>Already have an account <i className="fas fa-angle-right create-icon"></i></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}