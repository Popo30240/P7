import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
// Components
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import AccommodationDetails from './components/AccommodationDetails';
import APropos from './pages/About';
// images
import BannerAbout from './assets/image/image-montain.png';



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <NavBar />
  <main>
    <Routes>
        <Route path="/" element={<>
          <Banner />
          <Card />
        </>} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        <Route path="/about" element={<>
          <Banner image={BannerAbout} showTitle={false} />
          <APropos />
        </>} />
    </Routes>
  </main>
  <Footer />
  </BrowserRouter>
);