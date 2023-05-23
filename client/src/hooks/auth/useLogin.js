import { useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";

const useLogin = () =>
  useMutation({
    // login with email and password
    mutationFn: (user) =>
      authService.login(user.email, user.password).then((res) => res),
  });

export default useLogin;
