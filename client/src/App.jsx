import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import Note from "./components/Note/Note";
import useNotes from "./hooks/useNotes";

function App() {
  const { data: notes, isFetching, error } = useNotes();

  return (
    <>
      <Header />
      <NoteForm />

      {isFetching ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="notes">
          {notes?.map((note, index) => (
            <Note
              key={note ? note._id : index}
              id={note ? note._id : index}
              title={note.title}
              content={note.content}
            />
          ))}
        </div>
      )}

      {error && <p className="fetch-error">Unable to fetch notes.</p>}

      <Footer />
    </>
  );
}

export default App;
