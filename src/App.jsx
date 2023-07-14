import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import OverviewPage from "./pages/OverviewPage";
import AddGasEntryPage from "./pages/AddGasEntryPage";

function App() {
  return (
    <Router>
      <NavBar />

      

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/overview" element={<OverviewPage />}></Route>
        <Route path="/log" element={<AddGasEntryPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
