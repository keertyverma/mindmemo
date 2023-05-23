import appWriteService from "./appwriteService";
import constant from "../constants";

const appURL = constant.app.url;
if (!appURL) {
  throw new Error("No app url provided for oauth login");
}

const authService = {
  createAccount: (email, password, name) =>
    appWriteService.account.create("unique()", email, password, name),

  login: (email, password) =>
    appWriteService.account.createEmailSession(email, password),

  loginWithGoogle: () =>
    appWriteService.account.createOAuth2Session(
      "google",
      `${constant.app.url}/profile`,
      `${constant.app.url}/login`,
      ["profile"]
    ),

  getCurrentUser: () => appWriteService.account.get(),

  logout: () => appWriteService.account.deleteSession("current"),
};

export default authService;
