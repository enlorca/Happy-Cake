import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation.jsx"

import HomePage from "./views/HomePage"
import Contacto from "./views/Contacto"
import NotFound from "./views/NotFound";

import './App.css'

function App() {
  
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
