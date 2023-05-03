import { Navbar } from './components/Navbar';
import './index.css';

import { Route,Routes } from "react-router-dom";

import { Home } from './pages/Home';
import { About } from './pages/About';
import { SingleCocktail } from './pages/SingleCocktail';
import { Error } from './pages/Error';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cocktail/:id" element={<SingleCocktail/>} />
          <Route path="*" element={<Error/>} />
      </Routes>
      </>
  );
}

export default App;
