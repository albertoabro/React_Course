import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import '@fontsource-variable/montserrat';
import './index.css'
import { MainApp } from './09-useContext/MainApp';

//import { TodoApp } from './08-useReducer/TodoApp';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer'
//import { CallBackHook } from './06-memos/CallBackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import {CounterApp} from './01-useState/CounterApp'
//import {HookApp} from '@/HookApp.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <MainApp />
  </StrictMode>
  </BrowserRouter>
)
