import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TagManager from 'react-gtm-module' // Import the library

// Initialize GTM with your ID
const tagManagerArgs = {
    gtmId: 'GTM-M98ZFRXG'
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)