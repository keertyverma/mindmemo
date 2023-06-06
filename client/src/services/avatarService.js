import appWriteService from "./appwriteService";
import localeService from "./localeService";

const avatarService = {
  getUserInitials: () => appWriteService.avatar.getInitials(),
  getCountryFlag: () =>
    localeService.getUserLocation().then((res) => {
      const flag = appWriteService.avatar.getFlag(
        res.countryCode.toLowerCase()
      );

      if (flag?.href) {
        return flag.href;
      }
      return;
    }),
};

export default avatarService;
