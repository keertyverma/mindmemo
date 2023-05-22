import { Client, Databases, Query, ID } from "appwrite";
import constant from "../constants";

const { endpoint, projectID, databaseID, collectionID } = constant.appwrite;

const client = new Client().setEndpoint(endpoint).setProject(projectID);

const databases = new Databases(client);

const appWriteService = {
  getNotes: () =>
    databases.listDocuments(databaseID, collectionID, [
      Query.orderDesc("$createdAt"),
    ]),

  createNote: (newNote) =>
    databases.createDocument(databaseID, collectionID, ID.unique(), newNote),

  deleteNoteById: (id) =>
    databases.deleteDocument(databaseID, collectionID, id),
};

export default appWriteService;
