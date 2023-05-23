import { useEffect, useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm/NoteForm";
import Note from "./components/Note/Note";
import Logout from "./pages/UserAuth/Logout";
import useNotes from "./hooks/useNotes";
import authService from "./services/authService";

function App() {
  const { data: notes, isFetching, error } = useNotes();
  const [user, setUser] = useState("");

  useEffect(() => {
    authService.getCurrentUser().then((res) => setUser(res));
  }, []);

  return (
    <>
      <Header />
      <p className="user-info">Hello {user.name}</p>
      <Logout />
      <NoteForm />

      {isFetching ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="notes">
          {notes?.map((note) => (
            <Note
              key={note.id}
              id={note.id}
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
