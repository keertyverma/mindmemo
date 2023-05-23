import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import useLogin from "../../hooks/auth/useLogin";
import "./auth.css";
import authService from "../../services/authService";

function Login() {
  const { register, handleSubmit, reset } = useForm();

  const userLogin = useLogin();
  const navigate = useNavigate();

  const handleLoginWithEmailAndPass = (email, password) => {
    userLogin.mutate(
      { email, password },
      {
        onSuccess() {
          navigate("/profile");
        },
      }
    );
  };

  const handleLoginWithGoogle = () => {
    authService.loginWithGoogle();
  };

  return (
    <>
      <Header />
      <h2 className="auth-title">Login</h2>
      <p className="signup-link">
        Not Registered ? <Link to="/signup">Sign Up</Link>
      </p>
      <form
        className="login-form"
        onSubmit={handleSubmit((data) => {
          handleLoginWithEmailAndPass(data.email, data.password);
          reset();
        })}
      >
        {userLogin.error && (
          <p className="user-error">
            Invalid credentials. Please check the email or password.
          </p>
        )}
        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            name="password"
            type="text"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" disabled={userLogin.isLoading}>
          Login
        </button>
      </form>
      <div className="other-logins">
        <p> Or </p>
        <p>
          Login with{" "}
          <button className="btn-google" onClick={handleLoginWithGoogle}>
            Google <FcGoogle />
          </button>
        </p>
      </div>
    </>
  );
}

export default Login;
