import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import App from "../../App";
import authService from "../../services/authService";
import "./Profile.css";

function Profile() {
  const [userDetail, setUserDetail] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    // get currently logged in user data
    authService
      .getCurrentUser()
      .then((res) => {
        setUserDetail(res);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {userDetail.$id ? (
        <App />
      ) : (
        <div className="re-login">
          <p>Please </p>
          <Link to="/login"> Login</Link>
        </div>
      )}
    </>
  );
}

export default Profile;
