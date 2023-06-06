import { useEffect, useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note/Note";
import NoteForm from "./components/NoteForm/NoteForm";
import useNotes from "./hooks/useNotes";
import Logout from "./pages/UserAuth/Logout";
import authService from "./services/authService";
import avatarService from "./services/avatarService";

function App() {
  const { data: notes, isFetching, error } = useNotes();
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState({
    avatarUrl: "",
    countryFlagUrl: "",
  });

  useEffect(() => {
    authService.getCurrentUser().then((res) => setUser(res));
    const userAvatar = avatarService.getUserInitials();
    if (userAvatar) {
      setUserDetails((prev) => ({
        ...prev,
        avatarUrl: userAvatar,
      }));
    }

    avatarService.getCountryFlag().then((res) => {
      setUserDetails((prev) => ({
        ...prev,
        countryFlagUrl: res,
      }));
    });
  }, []);

  // console.log("userDetails = ", userDetails.countryFlagUrl);

  return (
    <>
      <Header />
      <img
        className="user-avatar-img"
        src={userDetails.avatarUrl}
        alt="user avatar"
      />
      <img
        className="country-flag"
        src={userDetails.countryFlagUrl}
        alt="user country flag"
      />
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
