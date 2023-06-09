
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from "./App.module.css";
import World from "./component/World";
function App() {

  return (
    <div className="App">
      <Hello age={10} nationality={"Korea"} />
      <Hello age={20} nationality={"Spain"} />
      <Hello age={30} nationality={"Canada"}/>
      <World city={"Madrid"}></World>
    </div>
  );
}

export default App;
