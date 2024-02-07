import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    { id: 1, question: "what is access", answer: "Access is a bank" },
    { id: 2, question: "what is First", answer: "Access is a First bank" },
    { id: 3, question: "what is Diamond", answer: "Access is a diamond bank" },
  ]);
  const [qinput, setQinput] = useState("");
  const [ainput, setAinput] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (ainput === "" || qinput === "") return;

    const newQuestion = {
      id: Date.now(),
      question: qinput,
      answer: ainput,
    };

    setQuestions([...questions, newQuestion]);

    setAinput("");
    setQinput("");
  }

  function addQinput(e) {
    setQinput(e.target.value);
  }

  function addAinput(e) {
    setAinput(e.target.value);
  }

  function boxClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <>
      {/* INTRO SECTION */}
      <div className="intro">
        <h1>🃏 Fash Card NG 🧠</h1>
        <h2>why flash card intro</h2>
        <h3>why flash more intro</h3>
      </div>

      {/* FORM SECTION */}
      <form className="question-form" onSubmit={handleSubmit}>
        <label>
          Question <br></br>
          <input type="text" value={qinput} onChange={addQinput} />
          <br></br>
        </label>
        <label>
          Answer <br></br>
          <input type="text" value={ainput} onChange={addAinput} />
          <br></br>
        </label>
        <button>ADD</button>
      </form>

      {/* QNA DISPLAY SECTION */}
      <div className="qbox-container">
        {questions.map((q) => (
          <div
            key={q.id}
            className={`q-box ${q.id === selectedId ? "q-answer" : ""}`}
            onClick={() => boxClick(q.id)}
          >
            {q.id === selectedId ? q.answer : q.question}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
