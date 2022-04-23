import { Routes,Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import './style/style.scss'
import CountryInfo from './Pages/CountryInfo';
import CountryProvider from './Context/CountryProvider';
import ThemeProvider from './Context/ThemeProvider';
function App() {

  return (
    <ThemeProvider>
      <CountryProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/home" element={<Home />} />
            <Route path='/country-info' element={<CountryInfo />} />
          </Route>
        </Routes>
      </CountryProvider>
    </ThemeProvider>
    
    
  );
}

export default App;
