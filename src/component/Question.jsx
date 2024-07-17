export default function Question({
  question,
  lock,
  setLock,
  setScore,
  option_array,
  line,
  element,
}) {
  const answer = (e, ans) => {
    if (lock == false) {
      if (question.answer === ans) {
        e.target.classList.add("correct");
        setScore((prev) => prev + 1);
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.answer - 1].current.classList.add("correct");
      }
    }
  };

  return (
    <>
      <li
        key={line}
        ref={option_array[line]}
        onClick={(e) => answer(e, line + 1)}
      >
        {element}
      </li>
    </>
  );
}
