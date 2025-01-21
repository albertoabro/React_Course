import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';


function App() {

  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Toolkit</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          Increment 1
        </button>
        <button onClick={() => dispatch( decrement() )}>
          Decrement 1
        </button>
        <button onClick={() => dispatch( incrementByAmount(5) )}>
          Increment 5 to 5
        </button>
        <p>
          count is {counter}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
