import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Book from './pages/Book';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/book" element={<Book />} />
        <Route path="/contact-us" element={<ContactUs />} />



      </Routes>
    </Router>
  );
}

export default App;
