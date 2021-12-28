import { Counter } from './components/Counter';
import { User } from './components/User';
import { TimerPadre } from './components/TimerPadre';
import { CounterReducer } from './components/CounterReducer';
import { Formulario } from './components/Formulario';

function App() {
  return (
    <div className="container bg-slate-800 text-slate-300 p-4">
      <h1 className="text-3xl">React + TypeScript</h1>
      <h2 className="text-3xl">useState</h2>
      <hr />
      <Counter />
      <hr />
      <User />
      <hr />
      <h2 className="text-3xl">useEffect - useRef</h2>
      <TimerPadre />
      <hr />
      <h2 className="text-3xl">useReducer</h2>
      <CounterReducer />
      <hr />
      <h2 className="text-3xl">Custom Hooks</h2>
      <Formulario />
      
    </div>
  );
}

export default App;
