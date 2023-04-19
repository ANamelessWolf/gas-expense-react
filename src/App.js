import logo from './logo.svg';
import './App.css';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div>Hello</div>
      <Routes>
        <Route 
        path='/about'
        element={<AboutPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
