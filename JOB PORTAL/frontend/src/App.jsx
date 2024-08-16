import { Companies, CompanyCreate, CompanySetup } from './admin/import';
import './App.css';
import { Footer, Login, Navbar, Register } from './components/import';
import { Browser, Home, JobDetails, Jobs, NotFound, Profile } from './routes/import';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browser />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        {/* admin */}
        <Route path="/admin/companies" element={<Companies />} />
        <Route path="/admin/companies/create" element={<CompanyCreate />} />
        <Route path="/admin/companies/:id" element={<CompanySetup />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
