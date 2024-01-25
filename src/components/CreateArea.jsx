import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isexpanded, setisexpanded] = useState(false);

  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setisexpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isexpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isexpanded ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isexpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
