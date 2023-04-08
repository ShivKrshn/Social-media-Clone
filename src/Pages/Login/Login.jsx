import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const loginHandler = () => {
    login();
  }; 

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World. Welcome</h1>
          <p>
            If you are always trying to be normal, you will never know how
            amazing you can be.
          </p>
          <span>don't have an account?</span>
          <Link to="/Register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
