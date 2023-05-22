import { useNavigate } from "react-router-dom";
import appWriteService from "../../services/appwriteService";

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    appWriteService.logout().then((res) => {
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
