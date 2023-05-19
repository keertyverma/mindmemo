import { useRef, useState } from "react";
import "./NoteForm.css";

function NoteForm({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      title: titleRef.current?.value,
      content: contentRef.current?.value,
    });

    setExpanded(false);
    // reset form data
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
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
      {isExpanded && <button type="submit">+</button>}
    </form>
  );
}

export default NoteForm;
