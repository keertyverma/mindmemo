import { Client } from "appwrite";
import constant from "../constants";

const { endpoint, projectID, ...rest } = constant.appwrite;

const client = new Client().setEndpoint(endpoint).setProject(projectID);

export default client;
