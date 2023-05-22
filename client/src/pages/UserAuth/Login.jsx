import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

import "./../../app.css";
import "./auth.css";
import Header from "../../components/Header";
import appWriteService from "../../services/appwriteService";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginUser = (data) => {
    appWriteService
      .login(data.email, data.password)
      .then((res) => {
        console.log("res = ", res);
        navigate("/profile");
      })
      .catch((err) => setError("Invalid email or password."));
  };

  return (
    <>
      <Header />
      <h2 className="auth-title">Login</h2>

      <form
        className="login-form"
        onSubmit={handleSubmit((data) => {
          loginUser(data);
          reset();
        })}
      >
        {error && <p className="user-error">{error}</p>}
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

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
