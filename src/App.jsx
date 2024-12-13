import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import PreciosPage from "./page/PreciosPage";
import Cervezas from "./page/Cervezas";
import { Navbar } from "./page/Navbar";

function Main() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PreciosPage />} />
        <Route path="/cervezas" element={<Cervezas />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App
