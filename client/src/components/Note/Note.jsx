import { MdDelete } from "react-icons/md";

import appWriteService from "../../services/appwriteService";
import "./Note.css";

function Note({ id, title, content, onDelete }) {
  const handleDelete = () => {
    // Delete data using appwrite database service
    appWriteService
      .deleteNoteById(id)
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
