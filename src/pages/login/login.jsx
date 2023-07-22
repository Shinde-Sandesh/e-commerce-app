import './login.css'
import { Link } from 'react-router-dom'
import { Navigation } from '../../components/Navigation'

export default function Login() {
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
              <Link href="" class="forget">Forget Password</Link>
            </div>
            <div >
              <button class="btn1 login-button">Login</button>
            </div>
            <div class="create-account">
              <Link to = "/signup" >Create new account <i class="fas fa-angle-right create-icon"></i></Link>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}