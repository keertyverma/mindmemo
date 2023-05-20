import { useRef, useState } from "react";
import { BsCardChecklist } from "react-icons/bs";
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
      <h3 className="create-note-title">
        <BsCardChecklist />
        <p>Take a note</p>
      </h3>
      {addNote.error && <p className="addnote-error">Failed to add note!</p>}
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          name="title"
          onClick={() => setExpanded(true)}
          placeholder="Title"
          required
        />
        {isExpanded && (
          <>
            <textarea
              ref={contentRef}
              rows={isExpanded ? "3" : "1"}
              placeholder="Add description..."
              required
            />
            <button type="submit" disabled={addNote.isLoading}>
              +
            </button>
          </>
        )}
      </form>
    </>
  );
}

export default NoteForm;
