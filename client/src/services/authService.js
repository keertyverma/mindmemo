import appWriteService from "./appwriteService";

const authService = {
  createAccount: (email, password, name) =>
    appWriteService.account.create("unique()", email, password, name),

  login: (email, password) =>
    appWriteService.account.createEmailSession(email, password),

  getCurrentUser: () => appWriteService.account.get(),

  logout: () => appWriteService.account.deleteSession("current"),
};

export default authService;
