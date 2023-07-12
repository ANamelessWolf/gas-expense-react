import './App.css';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Header from './components/HeaderComponent';
import OverviewPage from './pages/OverviewPage';
import { CarProvider } from "./context/CarContext";
import AddGasEntryPage from './pages/AddGasEntryPage';

function App() {
  return (
    <CarProvider>
      <Router>
        <NavBar/>
        
        <Header text="GAS Expense App" />
        
        <Routes>
          <Route 
          path='/about'
          element={<AboutPage/>}></Route>
          <Route 
          path='/overview'
          element={<OverviewPage/>}></Route>
          <Route 
          path='/log'
          element={<AddGasEntryPage/>}></Route>
        </Routes>
      </Router>
    </CarProvider>
  );
}

export default App;
