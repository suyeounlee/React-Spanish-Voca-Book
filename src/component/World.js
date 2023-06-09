import { useState } from "react";

export default function World (props) {
  const [city, setCity] = useState("Ottawa");

  function changeCity() {
       const newCity = city === "Madrid"? "Barcelona" : "Madrid";
       setCity(newCity);
    }
    
    return (
    <>
    <h3>{city}</h3>
    <button onClick={changeCity}>Change</button>
    
    </>
    )
}