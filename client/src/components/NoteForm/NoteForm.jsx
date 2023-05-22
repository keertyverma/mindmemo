import { useRef, useState } from "react";
import { BsCardChecklist } from "react-icons/bs";

import appWriteService from "../../services/appwriteService";
import "./NoteForm.css";

function NoteForm({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const note = {
      title: titleRef.current?.value,
      content: contentRef.current?.value,
    };

    // Create data using appwrite database service
    appWriteService
      .createNote(note)
      .then((res) =>
        onAdd({
          id: res.$id,
          title: res.title,
          content: res.content,
        })
      )
      .catch((err) => console.log("err = ", err));

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
            <button type="submit">+</button>
          </>
        )}
      </form>
    </>
  );
}

export default NoteForm;
