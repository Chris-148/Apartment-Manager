import CreateNewListing from "../components/CreateNewListing"
import listingData from '../assets/listingData.json';


const NewListingPage = () => {
  return (
    <CreateNewListing listingData = {listingData}/>
  )
}

export default NewListingPage