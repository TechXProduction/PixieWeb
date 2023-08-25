import { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { Home } from './Components/Home/Home';


function App() {
  

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        
        <Home/>
        
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App
