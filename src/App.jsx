import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
