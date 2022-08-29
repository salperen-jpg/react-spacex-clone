import { useGlobalContext } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dragon, FalconHeavy, Home, StarShip } from './pages';
import { Footer, Navbar, Sidebar } from './components';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/falconHeavy' element={<FalconHeavy />} />
        <Route path='/dragon' element={<Dragon />} />
        <Route path='/starship' element={<StarShip />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
