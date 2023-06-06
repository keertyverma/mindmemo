import appWriteService from "./appwriteService";

const localeService = {
  getUserLocation: () => appWriteService.locale.get(),
};

export default localeService;
