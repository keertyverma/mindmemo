import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import Note from "./components/Note/Note";
import useNotes from "./hooks/useTasks";

function App() {
  const [notes, setNotes] = useState([]);

  const { data, isFetching, error } = useNotes();

  console.log("data = ", data);
  useEffect(() => {
    if (data && data.length !== 0) {
      setNotes([...data]);
    }
  }, [data]);

  if (isFetching) return <p className="loading">Loading...</p>;

  if (error) return null;

  return (
    <>
      <Header />
      <NoteForm
        onAdd={(newNote) => setNotes((prevNotes) => [newNote, ...prevNotes])}
      />
      <div className="notes">
        {notes?.map((note, index) => (
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
