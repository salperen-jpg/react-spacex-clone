import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dragon, FalconHeavy, Home, HumanSpaceFlight, StarShip } from './pages';
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
        <Route path='/humanSpaceFlight' element={<HumanSpaceFlight />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
