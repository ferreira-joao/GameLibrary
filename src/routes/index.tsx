import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Details from "../pages/Details";
import GlobalStyle from "../global/globalStyles";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
