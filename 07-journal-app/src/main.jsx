import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JournalApp } from './JournalApp.jsx'
import { BrowserRouter } from 'react-router'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <JournalApp />
    </StrictMode>
  </BrowserRouter> 
)
