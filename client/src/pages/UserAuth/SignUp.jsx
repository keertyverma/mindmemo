import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

import "./auth.css";
import Header from "../../components/Header";
import appWriteService from "../../services/appwriteService";

function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signupUser = (data) => {
    appWriteService
      .createAccount(data.email, data.password, data.name)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => setError("User with this email is already registered."));
  };

  return (
    <>
      <Header />
      <h2 className="auth-title">Sign Up</h2>

      <form
        className="signup-form"
        onSubmit={handleSubmit((data) => {
          signupUser(data);
          reset();
        })}
      >
        {error && <p className="user-error">{error}</p>}
        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            className="form-control"
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
        </div>

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

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignUp;
