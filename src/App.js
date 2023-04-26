import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './Components/Header';
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
