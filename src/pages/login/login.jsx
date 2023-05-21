import './login.css'
import { Navigation } from '../../components/Navigation'

export default function Login () {
      return (
            <>
            <Navigation />
            <div class="center">
  <div class="login-container">
    <div class="login-heading">Login</div>
    <form action="#">
      <div class="data">
        <label class="input-login label-class" for="">Email Address</label>
        <input type="text" placeholder="Enter Email ID" required />
      </div>
      <div class="data">
        <label class="input-login label-class" for="">Password</label>
        <input type="password" placeholder="Enter your password" required />
      </div>
      <div class="remember-me flex">
        <div class="checkmark">
          <input type="checkbox" />
          <span class="span-style">Remember me</span>
        </div>
        <a href="" class="forget">Forget Password</a>
      </div>
      <div >
            <button class="btn1 login-button">Login</button>
          </div>
          <div class="create-account">
            <a href="signup.html">Create new account <i class="fas fa-angle-right create-icon"></i></a>
          </div>
        </form>
      </div>
    </div>

            </>
      )
}