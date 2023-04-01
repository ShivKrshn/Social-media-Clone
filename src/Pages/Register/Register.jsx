import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Social App</h1>
          <p>If you are always trying to be normal, you will never know how amazing you can be.</p>
          <span>do you have an account?</span>
          <Link to='/Login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <input type="password" placeholder='Password' />
            <input type='text' placeholder='Name'/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
