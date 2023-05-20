import { MdDelete } from "react-icons/md";
import "./Note.css";
import useDeleteNote from "../../hooks/useDeleteNote";

function Note({ id, title, content }) {
  const deleteNote = useDeleteNote();

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
          <button
            onClick={() => deleteNote.mutate(id)}
            disabled={deleteNote.isLoading}
          >
            <MdDelete />
          </button>
        </div>
        <div className="note-content"> {content}</div>
      </div>
    </>
  );
}

export default Note;
