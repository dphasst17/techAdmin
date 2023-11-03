import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from "./component/GlobalStyles";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStyles>
      <App />
    </GlobalStyles>
)
