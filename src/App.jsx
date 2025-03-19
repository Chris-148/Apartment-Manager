import './App.css'
import { useState } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage';
import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import ListingDetailsPage from './pages/ListingDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import listingData from './assets/listingData.json';
import NewListingPage from './pages/NewListingPage';
import { UpdateListingPage } from './pages/UpdateListingPage';




function App() {

  const [listingDataState, setListingDataState] = useState(listingData);

  return (
    <div className = "App">
    <Navbar/>
    <Routes>
    <Route path = '/' element = {<Homepage listingDataState = {listingDataState} setListingDataState = {setListingDataState}/>}/>
    <Route path = '/About' element = {<AboutPage/>}/> 
    <Route path = '/Details/:listingId' element = {<ListingDetailsPage listingData = {listingData}/>}/>
    <Route path = '/NewListing' element = {<NewListingPage listingDataState = {listingDataState} setListingDataState = {setListingDataState}/>}/>
    <Route path = '/UpdateListingPage/:listingId' element = {<UpdateListingPage listingDataState = {listingDataState} setListingDataState = {setListingDataState}/>}/>
    <Route path = '*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
