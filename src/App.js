import { useEffect, useState } from "react";

function App() {
  const [noteCount, setNoteCount] = useState(1);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.metaKey && e.key === "i") {
        setNoteCount(noteCount + 1);
      }
    });
  });
  return (
    <>
      <button onClick={() => setNoteCount(noteCount + 1)}>add</button>
      <div id="content" contentEditable={true}>
        {[...Array(noteCount)].map((_, i) => (
          <div key={i}>{i}: </div>
        ))}
      </div>
    </>
  );
}

export default App;
