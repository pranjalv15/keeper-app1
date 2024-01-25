import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);
  function addNote(note) {
    setArr((prev) => {
      return [...prev, note];
    });
  }

  function deleteNote(id) {
    setArr((prev) => {
      return prev.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {arr.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={note.title}
            content={note.content}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
