import './signup.css';
import { Navigation } from '../../components/Navigation'

export default function Signup () {
      return (
            <>
            <Navigation />
            <div class="center">
      <div class="login-container">
        <div class="login-heading">Sign Up</div>
        <form action="#">
          <div class="data">
              <label class="label-class" for="">Name</label>
              <input type="text" placeholder="Enter Name" required />
          </div>
          <div class="data">
              <label class="label-class" for="">Mobile Number</label>
              <input type="number" placeholder="Enter Mobile Number" required />
          </div>
          <div class="data">
              <label class="label-class" for="">Address</label>
              <input type="text" placeholder="Enter Address" required />
          </div>
          <div class="data">
              <label class="label-class" for="">Email Address</label>
              <input type="text" placeholder="Enter Email ID" required />
          </div>
          <div class="data">
            <label class="label-class" for="">Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <div>
            <input type="checkbox" />
            <span>Accept <a href="#">terms and conditions</a></span>
          </div>
          <div>
            <button  class="btn1 login-button" type="submit">Create New Account</button>
          </div>
          <div class="create-account">
            <a href="login.html">Already have an account <i class="fas fa-angle-right create-icon"></i></a>
          </div>
        </form>
      </div>
    </div>
            </>
      )
}