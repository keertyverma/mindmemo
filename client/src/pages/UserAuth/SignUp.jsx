import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./../../app.css";
import "./auth.css";
import Header from "../../components/Header";
import appWriteService from "../../services/appwriteService";

function SignUp() {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const signupUser = (data) => {
    appWriteService
      .createAccount(data.email, data.password, data.name)
      .then((res) => {
        navigate("/profile");
      })
      .catch((err) => console.log("error = ", err));
  };

  return (
    <>
      <Header />
      <h2 className="signup-title">Sign Up</h2>
      <form
        className="signup-form"
        onSubmit={handleSubmit((data) => {
          signupUser(data);
          reset();
        })}
      >
        <div></div>
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
