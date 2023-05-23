import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import useLogin from "../../hooks/auth/useLogin";
import "./auth.css";

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

  return (
    <>
      <Header />
      <h2 className="auth-title">Login</h2>

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
        <p className="signup-link">
          Not Registed ? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </>
  );
}

export default Login;
