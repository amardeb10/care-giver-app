import { useRef, useState } from "react";
import { data } from "../assets/data";
import "./Quiz.css";
import { Divider } from "@mui/material";

export default function Quiz() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [result, setResult] = useState(false);
  let [score, setScore] = useState(0);
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);

      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };

  const answer = (e, ans) => {
    if (lock == false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const retake = () => {
    setIndex(0);
    setQuestion(data[index]);
    setLock(false);
    setResult(false);
  };

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let option_array = [option1, option2, option3, option4];
  return (
    <div className="quiz-app">
      <div className="quiz-container">
        <h1>Quiz App</h1>

        <Divider style={{ color: "#707070", border: "none" }} />
        {result ? (
          <></>
        ) : (
          <>
            <h2>
              {index + 1}.{question.question}
            </h2>
            <ul>
              <li ref={option1} onClick={(e) => answer(e, 1)}>
                {question.option1}
              </li>
              <li ref={option2} onClick={(e) => answer(e, 2)}>
                {question.option2}
              </li>
              <li ref={option3} onClick={(e) => answer(e, 3)}>
                {question.option3}
              </li>
              <li ref={option4} onClick={(e) => answer(e, 4)}>
                {question.option4}
              </li>
            </ul>
            <div style={{ display: "flex", padding: "10px" }}>
              <div className="index">
                {index + 1} of {data.length} questions
                <span className="nextButton">
                  <button onClick={next}>Next</button>
                </span>
              </div>
            </div>
          </>
        )}
        {!result ? (
          <></>
        ) : (
          <>
            <h2>You scored 1 out of {data.length}</h2>
            <div>
              <button onClick={retake}> Retake </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
