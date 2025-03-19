import listingData from '../assets/listingData.json';
import ListingItem from '../components/ListingItem';
import React,{useState} from "react";
import { Link } from "react-router-dom"


const Homepage = ({listingDataState, setListingDataState}) => {

    const handleDelete=(id)=>{
      setListingDataState(listingDataState.filter((item)=>item.id!==id));
    };

  return (
    <div className="detail-card-container">
    {listingDataState.map((oneItem)=>{
        return (
        <ListingItem oneItem = {oneItem} key = {oneItem.id} handleDelete = {handleDelete}/>
        )  
   })  
   }
   </div>
  )
}

export default Homepage