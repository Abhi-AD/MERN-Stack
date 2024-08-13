import './App.css';
import { Footer, Login, Navbar, Register } from './components/import';
import { Browser, Home, Jobs, NotFound } from './routes/import';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
