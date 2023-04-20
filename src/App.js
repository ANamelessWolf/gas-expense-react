import './App.css';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Header from './components/HeaderComponent';
import OverviewPage from './pages/OverviewPage';

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
