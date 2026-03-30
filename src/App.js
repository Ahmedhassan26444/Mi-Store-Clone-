import './App.css';
import Prenavbar from './components/prenavbar';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './components/slider';
import data from "./Data/Data.json"; 

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Slider start={data.banner.start} /> 
    </Router>
  );
}

export default App;