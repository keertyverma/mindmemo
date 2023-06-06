import { Client, Databases, Account, Avatars, Locale } from "appwrite";
import constant from "../constants";

const { endpoint, projectID, databaseID, collectionID } = constant.appwrite;

if (!endpoint) {
  throw new Error("No Endpoint url provided for appwrite sdk");
}

if (!projectID) {
  throw new Error("No Project id provided for appwrite sdk");
}

const client = new Client().setEndpoint(endpoint).setProject(projectID);

const appWriteService = {
  account: new Account(client),
  databases: new Databases(client),
  avatar: new Avatars(client),
  locale: new Locale(client),
};

export default appWriteService;
