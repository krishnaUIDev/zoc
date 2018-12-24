import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

const theme = {
  palette: {
    red: '#FF0000',
    ash: '#f4f9f9',
    black: '#393939',
    lighgrey: '#E1E1E1',
    blue: '#1278d7',
    bs:
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
  },
  textSize: {
    fontSize: '14px',
    fontWeight: '500'
  }
}

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
