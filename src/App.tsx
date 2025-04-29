
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdoptionPage from './pages/AdoptionPage';
import ContactsPage from './pages/ContactsPage';
import EventsPage from './pages/EventsPage';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
