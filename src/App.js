import './App.css';
import Prenavbar from './components/prenavbar';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './components/slider';
import data from "./Data/Data.json"; 
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="Star Products" />
      <StarProduct starProduct={data.starProduct} />
    </Router>
  );
}

export default App;