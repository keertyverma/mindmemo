import { MdDelete } from "react-icons/md";

import useDeleteNote from "../../hooks/useDeleteNote";
import "./Note.css";

function Note({ id, title, content }) {
  const deleteNote = useDeleteNote();

  const handleDelete = () => {
    deleteNote.mutate(id);
  };

  return (
    <>
      <div className="note">
        {deleteNote.isLoading ? (
          <p>Deleting...</p>
        ) : (
          deleteNote.error && (
            <p className="deletenote-error">Failed to delete note!</p>
          )
        )}

        <div className="note-header">
          <h2 className="title">{title}</h2>
          <button onClick={handleDelete} disabled={deleteNote.isLoading}>
            <MdDelete />
          </button>
        </div>
        <div className="note-content"> {content}</div>
      </div>
    </>
  );
}

export default Note;
