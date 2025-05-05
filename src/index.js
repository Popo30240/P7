import React from "react";
import ReactDOM from "react-dom/client";
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Header';
import Survey from "./pages/Survey";
import Card from './components/Card';
import NotFound from './pages/NotFound';
import Footer from './pages/Home/Footer';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Nav />
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/" element={<Card />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
  </Routes>
  <Card />
  <Footer />
  </BrowserRouter>
);