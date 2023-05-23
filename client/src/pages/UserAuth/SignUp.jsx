import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import useSignup from "../../hooks/auth/useSignUp";
import "./auth.css";

function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const signup = useSignup();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <h2 className="auth-title">Sign Up</h2>

      <form
        className="signup-form"
        onSubmit={handleSubmit((data) => {
          signup.mutate(
            {
              name: data.name,
              email: data.email,
              password: data.password,
            },
            {
              onSuccess() {
                navigate("/login");
              },
            }
          );
          reset();
        })}
      >
        {signup.error && (
          <p className="user-error">
            User with this email is already registered.
          </p>
        )}
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

        <button type="submit" disabled={signup.isLoading}>
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUp;
