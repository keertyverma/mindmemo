import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import Note from "./components/Note/Note";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Header />
      <NoteForm
        onAdd={(newNote) => setNotes((prevNotes) => [newNote, ...prevNotes])}
      />
      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={(id) =>
              setNotes((prevNotes) =>
                prevNotes.filter((note, index) => index !== id)
              )
            }
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
