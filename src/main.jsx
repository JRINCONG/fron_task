import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/Redux.js'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HashRouter>
    <Provider store = { store }>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <App />
    </LocalizationProvider>
    </Provider>
    </HashRouter>
   
  </React.StrictMode>,
)
