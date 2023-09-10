import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { Home } from './Components/Home/Home';
import { Contact } from './Components/Contact';
import DividendCalculator from './Components/Home/Calculadora';

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/calculate' element={<DividendCalculator />} />
            {/* Otras rutas pueden agregarse aquí */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;

