import { Client, Databases, Query, ID, Account } from "appwrite";
import constant from "../constants";

const { endpoint, projectID, databaseID, collectionID } = constant.appwrite;

const client = new Client().setEndpoint(endpoint).setProject(projectID);

const databases = new Databases(client);
const account = new Account(client);

const appWriteService = {
  getNotes: () =>
    databases.listDocuments(databaseID, collectionID, [
      Query.orderDesc("$createdAt"),
    ]),

  createNote: (newNote) =>
    databases.createDocument(databaseID, collectionID, ID.unique(), newNote),

  deleteNoteById: (id) =>
    databases.deleteDocument(databaseID, collectionID, id),

  createAccount: (email, password, name) =>
    account.create("unique()", email, password, name),
};

export default appWriteService;
