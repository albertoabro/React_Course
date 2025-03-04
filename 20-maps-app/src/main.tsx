import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MapsApp } from './MapsApp.tsx'

if (!navigator.geolocation){
  alert('Geolocation is not supported by your browser'); 
  throw new Error('Geolocation is not supported by your browser'); 
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
)
