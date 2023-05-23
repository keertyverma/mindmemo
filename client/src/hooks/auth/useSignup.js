import { useMutation } from "@tanstack/react-query";
import authService from "../../services/authService";

const useSignup = () =>
  useMutation({
    // create user
    mutationFn: ({ name, email, password }) =>
      authService.createAccount(email, password, name).then((res) => res),
  });

export default useSignup;
