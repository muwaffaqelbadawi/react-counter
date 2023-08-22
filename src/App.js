import "./App.css";
import CounterTitle from "./Components/CounterTitle";
import Counter from "./Components/Counter";
import Welcomemsg from "./Components/Welcomemsg";

function App() {
  return (
    <header className="App-header">
      <CounterTitle />
      <Welcomemsg />
      <Counter />
    </header>
  );
}

export default App;
