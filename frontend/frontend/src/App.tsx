import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FruitList from './components/Fruits';
import RobsWorkspace from './pages/RobsWorkspace';
import KhalilsWorkspace from './pages/KhalilsWorkspace';

const App: React.FC = () => {
  return (
    
    <div className="App">
      <Router>
        <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<FruitList />}></Route>
        <Route path="/robs-workspace" element={<RobsWorkspace />}></Route>
        <Route path="/khalils-workspace"element={<KhalilsWorkspace />}></Route>
      </Routes>
      </Router>
      
    </div>
  );
};

export default App;