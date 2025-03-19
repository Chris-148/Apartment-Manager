import CreateNewListing from "../components/CreateNewListing"

const NewListingPage = ({listingDataState, setListingDataState}) => {
  return (
    <CreateNewListing listingDataState = {listingDataState} setListingDataState = {setListingDataState}/>
  )
 }

export default NewListingPage