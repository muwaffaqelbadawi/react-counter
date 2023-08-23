import "./App.css";
import CounterTitle from "./Components/CounterTitle";
import Welcomemsg from "./Components/Welcomemsg";
import Search from "./Components/Search";
import Counter from "./Components/Counter";


function App() {
  return (
    <header className="App-header">
      <CounterTitle />
      <Welcomemsg />
      <Search />
      <Counter />
    </header>
  );
}

export default App;
