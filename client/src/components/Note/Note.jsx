import { MdDelete } from "react-icons/md";
import "./Note.css";

function Note({ id, title, content }) {
  return (
    <div className="note">
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
      <button
      // onClick={() => {
      //   onDelete(id);
      // }}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default Note;
