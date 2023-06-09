
import { useState } from "react";
import UserName from "./UserName";

const Hello = function(props) {
    console.log(props);
   // let name="Suyeon"
    const [name, setName] = useState("Suyeon");
    const [age, setAge] = useState(props.age);
    const msg = age > 19? "You can drink!🍷" : "You can drink juice🧃";

   return (
    <div>
    <h2 id="name"  >{name}{age}: {msg}</h2>
    <UserName name={name}></UserName>
    <button onClick={() => {
        setName(name === "Suyeon"? "Jane" : "Suyeon");
        setAge(age + 1);
    }}>Change</button>
    </div>
   )
} 

/* <button onClick={() => {
    setName(name === "Suyeon" ? "Jane" : "Suyeon");
}}
> 
Change </button> */

// const Hello = () => {
//     <p>Hello</p>
// };

export default Hello;



// export default function Hello() {
//     <p>Hello</p>;
// }