import { useRef, useState } from "react";
import "./NoteForm.css";
import useAddNote from "../../hooks/useAddNote";

function NoteForm() {
  const [isExpanded, setExpanded] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();

  const addNote = useAddNote();

  const handleSubmit = (event) => {
    event.preventDefault();

    addNote.mutate({
      title: titleRef.current?.value,
      content: contentRef.current?.value,
    });

    setExpanded(false);

    // reset form data
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <>
      {addNote.error && <p className="addnote-error">Failed to add note!</p>}
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input ref={titleRef} name="title" placeholder="Title" required />
        )}

        <textarea
          ref={contentRef}
          onClick={() => setExpanded(true)}
          rows={isExpanded ? "3" : "1"}
          placeholder="Take a note..."
          required
        />
        {isExpanded && (
          <button type="submit" disabled={addNote.isLoading}>
            +
          </button>
        )}
      </form>
    </>
  );
}

export default NoteForm;
