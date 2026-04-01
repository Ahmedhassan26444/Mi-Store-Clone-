import './App.css';
import Prenavbar from './components/prenavbar';
import Navbar from './components/navbar';
import Slider from './components/slider';
import data from "./Data/Data.json"; 
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      
      <Heading text="Star Products" />
      <StarProduct starProduct={data.starProduct} />

      <Heading text="Hot Accessories" />
      <HotAccessoriesMenu />
<Routes>
  <Route 
    path="/music"
    element={
      <HotAccessories 
        music={data.hotAccessories.music}
        musicCover={data.hotAccessoriesCover.music}
      />
    }
  />
  <Route 
    path="/smart-devices"
    element={
      <HotAccessories 
        smartDevice={data.hotAccessories.smartDevice}
        smartDeviceCover={data.hotAccessoriesCover.smartDevice}
      />
    }
  />
  <Route 
    path="/home"
    element={
      <HotAccessories 
        home={data.hotAccessories.home}
        homeCover={data.hotAccessoriesCover.home}
      />
    }
  />
  <Route 
    path="/lifestyle"
    element={
      <HotAccessories 
        lifeStyle={data.hotAccessories.lifeStyle}
        lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
      />
    }
  />
  <Route 
    path="/mobile-accessories"
    element={
      <HotAccessories 
        mobileAccessories={data.hotAccessories.mobileAccessories}
        mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
      />
    }
  />
</Routes>
    </Router>
  );
}

export default App;