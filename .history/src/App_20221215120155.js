import { useEffect, useState } from "react";

export default function App() {
  // This state variable will hold the starting date:
  const [start, setStart] = useState(null);
  // This state variable will hold the ending date:
  const [end, setEnd] = useState(null);
  // This state variable will hold the difference between the starting and ending date:
  const [final, setFinal] = useState(null);

  // Update starting date on input change event:
  function handleStartChange(e) {
    setStart(new Date(e.target.value).getTime());
  }
  // Update ending date on input change event:
  function handleEndChange(e) {
    setEnd(new Date(e.target.value).getTime());
  }
  useEffect(
    function runWhenStartOrEndChange() {
      // Calculate difference only if both starting and ending dates are present and not null
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
      Start:
      <input
        onChange={handleStartChange}
        id="due"
        type="datetime-local"
        name="duedate"
      />
      End:
      <input
        onChange={handleEndChange}
        id="due"
        type="datetime-local"
        name="duedate"
      />
      <label htmlFor="due">Time you spent</label>
      <div>{final} minutes</div>
    </>
  );
}
