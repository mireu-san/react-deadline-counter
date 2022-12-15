import { useState, useEffect } from "react";

export default function App() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [final, setFinal] = useState(null);

  function handleStartChange(e) {
    setStart(new Date(e.target.value).getTime());
  }

  function handleEndChange(e) {
    setEnd(new Date(e.target.value).getTime());
  }

  useEffect(
    function runWhenStartOrEndChange() {
      if (end && start) {
        const diffTime =
          (new Date(end).getTime() - new Date(start).getTime()) / 1000 / 60;
        setFinal(diffTime);
      }
    },
    [start, end]
  );

  return (
    <>
      <label htmlFor="due">Set your time to compare it</label>
      <p />
      Start:
      <input
        onChange={handleStartChange}
        id="due"
        type="datetime-local"
        name="duedate"
      />
      <p />
      End:
      <input
        onChange={handleEndChange}
        id="due"
        type="datetime-local"
        name="duedate"
      />
      <label htmlFor="due">Time you spent</label>
      <p />
      <div>{final} minutes</div>
    </>
  );
}
