import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    authService.logout().then((res) => {
      navigate("/");
    });
  };

  return (
    <button className="logout" onClick={logout}>
      Logout
    </button>
  );
}

export default Logout;
