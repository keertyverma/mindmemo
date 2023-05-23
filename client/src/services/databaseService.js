import { Query, ID } from "appwrite";
import constant from "../constants";
import appWriteService from "./appwriteService";

const { databaseID, collectionID } = constant.appwrite;

const databaseService = {
  getNotes: () =>
    appWriteService.databases.listDocuments(databaseID, collectionID, [
      Query.orderDesc("$createdAt"),
    ]),

  createNote: (newNote) =>
    appWriteService.databases.createDocument(
      databaseID,
      collectionID,
      ID.unique(),
      newNote
    ),

  deleteNoteById: (id) =>
    appWriteService.databases.deleteDocument(databaseID, collectionID, id),
};

export default databaseService;
