import './App.css'
import listingData from './assets/listingData.json'
import Footer from './components/Footer'
import ListingItem from './components/ListingItem';
import Navbar from './components/Navbar'
import React,{useState} from "react";


function App() {

  const [listingDataState, setListingDataState] = useState(listingData);
  
  const handleDelete=(id)=>{
    setListingDataState(listingDataState.filter((item)=>item.id!==id));
  };

  return (
    <div className = "App">
    <Navbar/>
    
    {listingDataState.map((oneItem)=>{
         return <ListingItem oneItem = {oneItem} key = {oneItem.id} handleDelete = {handleDelete}/>  
    })  
    }
    
    <Footer/>
    </div>
  );
}

export default App;
