import './App.css';
import Counter from './components/Counter';
import {CounterContextProvider} from './context/CounterContext'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterContextProvider>
          <Counter />
        </CounterContextProvider>
      </header>
    </div>
  );
}

export default App;
