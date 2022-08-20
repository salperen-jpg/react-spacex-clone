import { useGlobalContext } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Navbar, Sidebar } from './components';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
