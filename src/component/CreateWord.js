import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "./hooks/useFetch";
import React from "react";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        esp: espRef.current.value,
        isDone: false,
      }),
    }).then(res => {
      if (res.ok) {
        alert("It has been created.");
        history.push(`/day/${dayRef.current.value}`);
      }
    });
  }

  const engRef = useRef(null);
  const espRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Esp</label>
        <input type="text" placeholder="Ordenador" ref={espRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>Save</button>
    </form>
  );
}