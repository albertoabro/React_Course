import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { App } from './FirstApp'
import { CounterApp } from './CounterApp'
import './index.css' //For global Styles

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterApp value={100}/>
        {/* <App title='Hello world'/> */}
    </StrictMode>
)