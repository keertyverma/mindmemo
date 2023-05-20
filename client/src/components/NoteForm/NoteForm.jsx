import { useRef, useState } from "react";
import { BsCardChecklist } from "react-icons/bs";
import { Databases, ID } from "appwrite";

import "./NoteForm.css";
import AppwriteClient from "../../services/appwrite-client";
import constant from "../../constants";

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
    const { databaseID, collectionID } = constant.appwrite;
    const databases = new Databases(AppwriteClient);
    databases
      .createDocument(databaseID, collectionID, ID.unique(), note)
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
