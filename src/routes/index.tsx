import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import GlobalStyle from "../global/globalStyles";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
