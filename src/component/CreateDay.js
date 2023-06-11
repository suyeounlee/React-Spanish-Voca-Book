import { useHistory } from "react-router";
import useFetch from "./hooks/useFetch";
import React from "react";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("It has been created.");
        history.push(`/`);
      }
    });
  }
  return (
    <div>
      <h3>now : {days.length}days</h3>
      <button onClick={addDay}>add Day</button>
    </div>
  );
}