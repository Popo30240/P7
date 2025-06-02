import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";

import './styles/style.scss';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AccommodationDetails from './pages/Accommodation';
import NotFound from './pages/404';
import About from './pages/About';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <div className="container__max1440">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/accommodation/:id" element={<AccommodationDetails />} />
            <Route path="/about" element={< About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>  
      </main>
    </div>
    <footer>
      <Footer />
    </footer>
  </BrowserRouter>
);