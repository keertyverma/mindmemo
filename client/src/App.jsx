import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm/NoteForm";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Header />
      <NoteForm
        onAdd={(newNote) => setNotes((prevNotes) => [newNote, ...prevNotes])}
      />
      <Footer />
    </>
  );
}

export default App;
