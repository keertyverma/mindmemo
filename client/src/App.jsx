import { useState, useEffect } from "react";
import { Databases, Query } from "appwrite";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import Note from "./components/Note/Note";
import AppwriteClient from "./services/appwrite-client";
import constant from "./constants";

function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { databaseID, collectionID } = constant.appwrite;
    const databases = new Databases(AppwriteClient);

    setLoading(true);

    // Retrieve data using appwrite database service
    databases
      .listDocuments(databaseID, collectionID, [
        Query.orderDesc("$createdAt"),
        // Query.select(["title", "content"]),
      ])
      .then((res) => {
        setNotes(
          res.documents?.map((n) => ({
            title: n.title,
            content: n.content,
            id: n.$id,
          }))
        );
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <NoteForm
        onAdd={(newNote) => setNotes((prevNotes) => [newNote, ...prevNotes])}
      />

      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="notes">
          {notes?.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={(id) =>
                setNotes((prevNotes) =>
                  prevNotes.filter((note) => note.id !== id)
                )
              }
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
