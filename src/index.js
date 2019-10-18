import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './theme'
import GlobalStyles from './styles/Global'

import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
      <GlobalStyles />
    </Router>
  </ThemeProvider>
  , document.getElementById('root'))
