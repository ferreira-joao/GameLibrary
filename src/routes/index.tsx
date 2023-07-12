import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Details from "../pages/Details";
import GlobalStyle from "../global/globalStyles";
import { SearchContextProvider } from "../context/searchContext";

export default function Router() {
  return (
    <SearchContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </SearchContextProvider>
  );
}
