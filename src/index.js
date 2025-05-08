import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
// Pages
import NotFound from './components/NotFound';
// Components
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';
import AccommodationDetails from './components/AccommodationDetails';
// images
import BannerAbout from './assets/image/image-montain.png';
import DropDown from "./components/DropDown";


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
          {/* <DropDown /> */}
        </>} />
    </Routes>
  </main>
  <Footer />
  </BrowserRouter>
);