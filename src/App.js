import React from "react";
import { Route, Routes } from "react-router-dom";
import Business from "./Components/Business/Business";
import Entertainment from "./Components/Entertainment/Entertainment";
import General from "./Components/General/General";
import Health from "./Components/Health/Health";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Nav/Nav";
import NotFound from "./Components/NotFound/NotFound";
import Science from "./Components/Science/Science";
import Sports from "./Components/Sports/Sports";
import Technology from "./Components/Technology/Technology";

export default function App() {
  return (
    <>
      <Nav />
      <div className="mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="business" element={<Business />}></Route>
          <Route path="entertainment" element={<Entertainment />}></Route>
          <Route path="health" element={<Health />}></Route>
          <Route path="science" element={<Science />}></Route>
          <Route path="sports" element={<Sports />}></Route>
          <Route path="technology" element={<Technology />}></Route>
          <Route path="general" element={<General />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}
