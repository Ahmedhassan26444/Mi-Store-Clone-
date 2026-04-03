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
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />

      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      
      <Heading text="Star Products" />
      <StarProduct starProduct={data.starProduct} />

      <Heading text="Hot Accessories" />
      <HotAccessoriesMenu />
      <Routes>
        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />
        <Route path="/smart-devices" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>} />
        <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>} />
        <Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>} />
        <Route path="/mobile-accessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>} />
      </Routes>

      <Heading text="Product Reviews"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="Videos"/>
      <Videos videos={data.videos}/>
      <Heading text="In The Press"/>
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />

    </Router>
  );
}

export default App;