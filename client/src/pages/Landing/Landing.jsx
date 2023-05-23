import { useNavigate } from "react-router-dom";

import authService from "../../services/authService";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  const handleClick = () => {
    authService
      .getCurrentUser()
      .then((res) => navigate("/profile"))
      .catch((err) => navigate("/login"));
  };

  return (
    <section className="container landing">
      <h1 className="title">MindMemo</h1>
      <p className="description">
        A task manager app that simplify the way you list, add or delete tasks.
      </p>
      <button onClick={handleClick}>Get Started</button>
    </section>
  );
}

export default Landing;
