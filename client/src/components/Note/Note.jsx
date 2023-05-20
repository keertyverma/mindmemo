import { MdDelete } from "react-icons/md";
import "./Note.css";
import useDeleteNote from "../../hooks/useDeleteNote";

function Note({ id, title, content }) {
  const deleteNote = useDeleteNote();

  return (
    <>
      <div className="note">
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
        {deleteNote.error && (
          <p className="deletenote-error">Failed to delete note!</p>
        )}
        <button
          onClick={() => deleteNote.mutate(id)}
          disabled={deleteNote.isLoading}
        >
          <MdDelete />
        </button>
      </div>
    </>
  );
}

export default Note;
