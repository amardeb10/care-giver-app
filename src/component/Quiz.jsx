import { useEffect, useRef, useState } from "react";
//import { data } from "../assets/data";
import "./Quiz.css";
import { Divider } from "@mui/material";
import ImageComponent from "./ImageComponent";
import Question from "./Question";

export default function Quiz() {
  let [index, setIndex] = useState(0);
  let [data, setData] = useState([]);
  let [question, setQuestion] = useState([]);
  let [lock, setLock] = useState(false);
  let [result, setResult] = useState(false);
  let [score, setScore] = useState(0);
  let [load, setLoad] = useState(false);
  let [quizAttempt, setQuizAttempt] = useState(1);
  let [questionsAnweredMap, setQuestionsAnweredMap] = useState(new Map());

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        submitAnswers();
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

  const retake = () => {
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setResult(false);
    setScore(0);
    setQuizAttempt((prev) => prev + 1);
  };

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let option_array = [option1, option2, option3, option4];

  //const fetchQuestions =
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    (async () => {
      try {
        console.log("loading questions");
        const response = await fetch(
          "http://localhost:8080/caringbridge/questions",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          },
          { signal } //Link the signal
        );
        if (!signal.aborted && response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data);
          setQuestion(data[index]);
          setLoad(true);
        } else {
          console.log(`Http Error! status: ${response.status}`);
        }
      } catch (err) {
        if (!signal.aborted) console.log(err.message);
      }
    })();
    return () => {
      //cancel the request when the component unmounts
      abortController.abort();
    };
  }, [quizAttempt]);

  const submitAnswers = async () => {
    const body = Object.assign(
      {},
      ...Array.from(questionsAnweredMap.entries()).map(([k, v]) => ({ [k]: v }))
    );

    try {
      console.log("submitting questions body" + body);
      const response = await fetch(
        `http://localhost:8080/caringbridge/questions/attempts/${quizAttempt}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response?.ok) {
        console.log("Answers Submitted Successfully");
        return <div>Answers Submitted successfully</div>;
      } else {
        console.error(
          `Error while Submitting Answer with staus : ${response.status}`
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="quiz-app">
      {!load ? (
        <></>
      ) : (
        <>
          <div className="quiz-container">
            <h1>Quiz App</h1>

            <Divider />
            {result ? (
              <></>
            ) : (
              <>
                {question.imageUrl == null || question.imageUrl == "" ? (
                  <></>
                ) : (
                  <>
                    <ImageComponent url={question.imageUrl} />
                  </>
                )}
                {}
                <h2>
                  {index + 1}.{question.question}
                </h2>
                <ul style={{ paddingInlineStart: "0px" }}>
                  {question !== undefined &&
                    question.options.split("¦").map((element, i) => {
                      return (
                        <Question
                          question={question}
                          lock={lock}
                          setLock={setLock}
                          setScore={setScore}
                          option_array={option_array}
                          key={i}
                          line={i}
                          element={element}
                          map={questionsAnweredMap}
                        />
                      );
                    })}
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
                <h2>
                  You scored {score} out of {data.length}
                </h2>
                <div>
                  <button onClick={retake}> Retake </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
