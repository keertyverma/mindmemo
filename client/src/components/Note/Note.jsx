import { MdDelete } from "react-icons/md";
import { Databases } from "appwrite";

import "./Note.css";
import AppwriteClient from "../../services/appwrite-client";
import constant from "../../constants";

function Note({ id, title, content, onDelete }) {
  const handleDelete = () => {
    // Delete data using appwrite database service
    const { databaseID, collectionID } = constant.appwrite;
    const databases = new Databases(AppwriteClient);

    databases
      .deleteDocument(databaseID, collectionID, id)
      .then((res) => {
        onDelete(id);
      })
      .catch((err) => console.log("err = ", err));
  };

  return (
    <>
      <div className="note">
        <div className="note-header">
          <h2 className="title">{title}</h2>
          <button onClick={handleDelete}>
            <MdDelete />
          </button>
        </div>
        <div className="note-content"> {content}</div>
      </div>
    </>
  );
}

export default Note;
