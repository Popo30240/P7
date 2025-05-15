import { BrowserRouter, Routes, Route ,  Navigate} from "react-router";
import ReactDOM from "react-dom/client";

// Components
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Card from './pages/Home';
import AccommodationDetails from './pages/Accommodation';
import NotFound from './pages/404';
import APropos from './pages/About';

// images
import defaultImage from './assets/image/image-shore.png';
import BannerAbout from './assets/image/image-montain.png';



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <NavBar />
  <main>
    <Routes>
        <Route path="/" element={<>
          <Navigate to="/home" />
        </>} />
        <Route path="/home" element={<>
          <Banner image={defaultImage} showTitle={true} />
          <Card />
        </>} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        <Route path="/about" element={<>
          <Banner image={BannerAbout} showTitle={false} />
          <APropos />
        </>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
  <Footer />
  </BrowserRouter>
);