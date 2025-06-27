import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(noteContext);

  useEffect(() => {
    a.update();
  }, []);

  return (
    <div>
      About My Name is : <b>{a.state.name}</b>
      <br />
      And i am study in <b>{a.state.class}</b>
    </div>
  );
};

export default About;
